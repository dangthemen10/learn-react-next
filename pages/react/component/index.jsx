import ChildComponent from "@/components/ChildComponent";
import Counter from "@/components/Counter";

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