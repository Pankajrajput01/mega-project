import React , {useCallback , useId } from 'react'
import { useForm } from 'react-hook-form'
import {Button , Input , Select , RTE} from '../index'
import service from './../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function PostForm({post}) {
    const { register , handleSubmit , watch , setValue , control , getValues } = useForm({
        defaultValues:{
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate()  

    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        console.log('submit called', Date.now(), new Error().stack);
        if(post){
            const file = data.image[0] ? service.uploadFile(data.image[0]) : null

            if (file){
                service.deleteFile(post.featuredImage)
            }

            const dbPost = await service.updatePost(
                post.$id , {
                    ...data,
                    featuredImage: file ? file.$id : undefined

                }
            )
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }

        } else {
            const file = await service.uploadFile(data.image[0])

            if (file){
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await service.createPost(
                    {...data,
                    Userid : userData.$id,}
                ) 
                if (dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }        
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string') {
            // First, convert to lowercase and trim
            const text = value.trim().toLowerCase();
            // Replace spaces and special characters with hyphens
            const slug = text
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')    
                .replace(/-+/g, '-');  
            
            // Ensure slug starts with a letter or number
            return /^[a-z0-9]/.test(slug) ? slug : `p-${slug}`;
        }
        return '';
    }, [])

    React.useEffect(()=>{
        const subscription = watch((value , {name})=> {
            if(name === 'title'){
                setValue('slug' ,slugTransform(value.title, {shouldValidate : true}))
            }
            return ()=>{
                subscription.unsubscribe()
            }
        })
    },[watch , slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-96 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE 
                    label="Content :" 
                    name="content" 
                    control={control}
                    defaultValue={getValues("content")}
                />
            </div>
            <div className="w-full lg:w-1/3 px-2">
                <div className="space-y-4">
                    <Input
                        label="Featured Image :"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full">
                            <p className="text-sm font-semibold text-slate-700 mb-2">Current Image</p>
                            <img
                                src={service.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="rounded-lg w-full object-cover shadow-md border border-blue-200"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        {...register("status", { required: true })}
                    />
                    <Button type="submit" bgClass={post ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} className="w-full">
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </div>
        </form>
  )
}

export default PostForm