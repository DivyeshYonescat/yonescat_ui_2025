import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Blockquote from '@tiptap/extension-blockquote';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
import Underline from '@tiptap/extension-underline';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Heading from '@tiptap/extension-heading';

const TiptapEditor = (props) => {
  const [isPreview, setIsPreview] = useState(false);
  const editor = useEditor({
    extensions: [ StarterKit, Underline, Image, Link, Blockquote, Code, CodeBlock, BulletList, OrderedList, ListItem, Heading,],
    content: '',
    onUpdate: ({ editor }) => {
      props.setContent(editor.getHTML());
    },
  });
  const addImage = () => {
    const url = prompt('Enter image URL:');
    if (url) { editor.chain().focus().setImage({ 
      src: url,
      alt: "upload images", 
      title: "text Editer upload iamge", 
    }).run(); }
  };
  const addLink = () => {
    const url = prompt('Enter link URL:');
    if (url) {  editor.chain().focus().setLink({ href: url }).run(); }
  };
  const togglePreview = () => { setIsPreview(!isPreview); };

  return (
    <div className='textEditer_cutome border rounded-[3px] border-solid border-black'> 
      <div className='textEditer_cutome_header w-full p-2 border-b border-solid'>
        <select 
          onChange={(e) => {
            const level = Number(e.target.value);
            if (level) {
              editor.chain().focus().setHeading({ level }).run();
            }
          }} 
          defaultValue=""
        >
          <option value="">Select Title</option>
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
        </select>
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>
        <svg width={"18px"} height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M333.5 238a122 122 0 0 0 27-65.2C367.9 96.5 308 32 233.4 32H34a16 16 0 0 0 -16 16v48a16 16 0 0 0 16 16h31.9v288H34a16 16 0 0 0 -16 16v48a16 16 0 0 0 16 16h209.3c70.8 0 134.1-51.8 141-122.4 4.7-48.5-16.4-92.1-50.8-119.6zM145.7 112h87.8a48 48 0 0 1 0 96h-87.8zm87.8 288h-87.8V288h87.8a56 56 0 0 1 0 112z"/></svg>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>
          <svg width={"18px"} height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 48v32a16 16 0 0 1 -16 16h-62.8l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16H16a16 16 0 0 1 -16-16v-32a16 16 0 0 1 16-16h62.8l80-320H112a16 16 0 0 1 -16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z"/></svg>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <svg width={"18px"} height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 64h32v160c0 88.2 71.8 160 160 160s160-71.8 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0 -16-16H272a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1 -160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0 -16-16H32a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()}>
          <svg width={"18px"} height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 224H293.9l-87.2-26.8A43.6 43.6 0 0 1 219.6 112h66.8A49.9 49.9 0 0 1 331 139.6a16 16 0 0 0 21.5 7.2l42.9-21.5a16 16 0 0 0 7.2-21.5l-.5-1A128 128 0 0 0 287.5 32h-68a123.7 123.7 0 0 0 -123 135.6c2 20.9 10.1 39.8 21.8 56.4H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm-180.2 96A43 43 0 0 1 336 356.5 43.6 43.6 0 0 1 292.5 400h-66.8A49.9 49.9 0 0 1 181 372.4a16 16 0 0 0 -21.5-7.2l-42.9 21.5a16 16 0 0 0 -7.2 21.5l.5 1A128 128 0 0 0 224.5 480h68a123.7 123.7 0 0 0 123-135.6 114.3 114.3 0 0 0 -5.3-24.4z"/></svg>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <svg width={"18px"} height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 224H293.9l-87.2-26.8A43.6 43.6 0 0 1 219.6 112h66.8A49.9 49.9 0 0 1 331 139.6a16 16 0 0 0 21.5 7.2l42.9-21.5a16 16 0 0 0 7.2-21.5l-.5-1A128 128 0 0 0 287.5 32h-68a123.7 123.7 0 0 0 -123 135.6c2 20.9 10.1 39.8 21.8 56.4H16a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm-180.2 96A43 43 0 0 1 336 356.5 43.6 43.6 0 0 1 292.5 400h-66.8A49.9 49.9 0 0 1 181 372.4a16 16 0 0 0 -21.5-7.2l-42.9 21.5a16 16 0 0 0 -7.2 21.5l.5 1A128 128 0 0 0 224.5 480h68a123.7 123.7 0 0 0 123-135.6 114.3 114.3 0 0 0 -5.3-24.4z"/></svg>
        </button> 
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <svg width={"18px"} height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M61.8 401l17.5-20.2a19.9 19.9 0 0 0 5.1-14.2v-3.3C84.3 356 80.5 352 73 352H16a8 8 0 0 0 -8 8v16a8 8 0 0 0 8 8h22.8a157.4 157.4 0 0 0 -11 12.3l-5.6 7c-4 5.1-5.3 10.1-2.8 14.9l1.1 1.9c3 5.8 6.3 7.9 12.3 7.9h4.7c10.3 0 15.9 2.4 15.9 9.1 0 4.7-4.2 8.2-14.4 8.2a41.5 41.5 0 0 1 -15.5-3.1c-6.5-3.9-11.7-3.5-15.6 3.1l-5.6 9.3c-3.7 6.1-3.2 11.7 2.6 15.9 7.7 4.7 20.4 9.4 37 9.4 34.2 0 48.5-22.8 48.5-44.1 0-14.4-9.1-29.8-28.7-34.9zM496 224H176a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm0-160H176a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0 -16-16zm0 320H176a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0 -8-8H64V40a8 8 0 0 0 -8-8H32a8 8 0 0 0 -7.1 4.4l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0 -8 8v16a8 8 0 0 0 8 8zm-3.9 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0 -8-8H41.3c3.3-10.3 48.3-18.7 48.3-56.4 0-29.1-25-39.6-44.5-39.6-21.4 0-33.8 10-40.5 18.8-4.4 5.6-3 10.8 2.8 15.4l8.6 6.9c5.6 4.6 11 2.5 16.1-2.4a13.4 13.4 0 0 1 9.5-3.8c3.3 0 9.3 1.6 9.3 8.8C51 248.2 0 257.3 0 304.6v4C0 316 5.1 320 12.1 320z"/></svg>
        </button>
        {/* <button type="button" onClick={() => editor.chain().focus().toggleCode().run()}>Inline Code</button>
        <button type="button" onClick={() => editor.chain().focus().setCodeBlock().run()}>Insert Code Block</button> */}
        <button type="button" onClick={addImage}>
          <svg width={"18px"} height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M480 416v16c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h16v208c0 44.1 35.9 80 80 80h336zm96-80V80c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48zM256 128c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-96 144l55.5-55.5c4.7-4.7 12.3-4.7 17 0L272 256l135.5-135.5c4.7-4.7 12.3-4.7 17 0L512 208v112H160v-48z"/></svg>
        </button>
        <button type="button" onClick={addLink}>
          <svg width={"18px"} height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.6 185.4c59.7 59.8 58.9 155.7 .4 214.6-.1 .1-.2 .3-.4 .4l-67.2 67.2c-59.3 59.3-155.7 59.3-215 0-59.3-59.3-59.3-155.7 0-215l37.1-37.1c9.8-9.8 26.8-3.3 27.3 10.6 .6 17.7 3.8 35.5 9.7 52.7 2 5.8 .6 12.3-3.8 16.6l-13.1 13.1c-28 28-28.9 73.7-1.2 102 28 28.6 74.1 28.7 102.3 .5l67.2-67.2c28.2-28.2 28.1-73.8 0-101.8-3.7-3.7-7.4-6.6-10.3-8.6a16 16 0 0 1 -6.9-12.6c-.4-10.6 3.3-21.5 11.7-29.8l21.1-21.1c5.5-5.5 14.2-6.2 20.6-1.7a152.5 152.5 0 0 1 20.5 17.2zM467.5 44.4c-59.3-59.3-155.7-59.3-215 0l-67.2 67.2c-.1 .1-.3 .3-.4 .4-58.6 58.9-59.4 154.8 .4 214.6a152.5 152.5 0 0 0 20.5 17.2c6.4 4.5 15.1 3.8 20.6-1.7l21.1-21.1c8.4-8.4 12.1-19.2 11.7-29.8a16 16 0 0 0 -6.9-12.6c-2.9-2-6.6-4.9-10.3-8.6-28.1-28.1-28.2-73.6 0-101.8l67.2-67.2c28.2-28.2 74.3-28.1 102.3 .5 27.8 28.3 26.9 73.9-1.2 102l-13.1 13.1c-4.4 4.4-5.8 10.8-3.8 16.6 5.9 17.2 9 35 9.7 52.7 .5 13.9 17.5 20.4 27.3 10.6l37.1-37.1c59.3-59.3 59.3-155.7 0-215z"/></svg>
        </button>
        {/* <button type="button" onClick={() => editor.chain().focus().setBlockquote().run()}>Quote</button> */}
        {/* <button type="button" onClick={togglePreview}>
          {isPreview ? 'Edit Mode' : 'Preview Mode'}
        </button> */}
      </div>
      {isPreview ? (
        <div className="preview" dangerouslySetInnerHTML={{ __html: editor.getHTML() }} />
      ) : (
        <EditorContent editor={editor} />
      )}
    </div>
  );
};

export default TiptapEditor;
