import Title from "./Title";
import ChoiceCard from "./ChoiceCard";

const QuestionBlock = ({ title, answers }) => {
  return (
    <div className="max-w-md mx-auto my-6 border-slate-700 rounded-xl shadow-lg">
      <Title title={title} />
      {answers.map((answer, index) => (
        <ChoiceCard answer={answer} index={index} />
      ))}
    </div>
  );
};

export default QuestionBlock;
