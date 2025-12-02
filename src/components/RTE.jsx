import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from '../conf/conf.js';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-3 text-sm font-semibold text-slate-900">
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <div className="rounded-lg border border-blue-200 shadow-md overflow-hidden">
            <Editor
                  apiKey={conf.tinyMceApiKey}
                  initialValue={defaultValue}
                  init={{
                    initialValue: defaultValue,
                    height: 500,
                    menubar: true,
                    plugins: [
                      "image",
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                      "anchor",
                    ],
                    toolbar:
                      "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style:
                      "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; font-size:14px; line-height: 1.6; color: #0f172a; }",
                    skin: 'oxide',
                  }}
                  onEditorChange={onChange}
                />
            </div>
            )}
      />
    </div>
  );
}
