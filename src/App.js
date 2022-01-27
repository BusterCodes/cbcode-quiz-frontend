import QuestionBlock from "./components/Question/QuestionBlock";

const questions = [
  { title: "Is this where the question goes?", answers: ["Yes", "No"] },
  {
    title: "How about a second question?",
    answers: ["Sure", "Why not?", "Please don't"],
  },
];

const App = () => {
  return questions.map((question) => (
    <QuestionBlock title={question.title} answers={question.answers} />
  ));
};

export default App;
