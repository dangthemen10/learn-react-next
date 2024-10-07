import ChildComponent from "@/pages/components/ChildComponent";
import Counter from "@/pages/components/Counter";

const StudyComponent = () => {

    console.log("StudyComponent Rendering....");
    return (
        <>
            <ChildComponent name="Đăng" />
            <Counter />
        </>
    );
}

export default StudyComponent