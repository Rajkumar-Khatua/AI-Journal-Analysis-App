import Editor from "@/components/Editor";

const EditorPage = ({params}) => {
    return (
       <div>
        <Editor entry={params.id} />
       </div>
    );
}

export default EditorPage;