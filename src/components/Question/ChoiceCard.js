function ChoiceCard({ answer, index }) {
  const answerLetter = (idx) => {
    switch (idx) {
      case 0:
        return "a";
      case 1:
        return "b";
      case 2:
        return "c";
      case 3:
        return "d";
      case 4:
        return "e";
      case 5:
        return "f";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl flex items-center space-x-4 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300">
      <div className="shrink-0">
        <div className="text-xl font-medium text-black">
          {answerLetter(index).toUpperCase()}
        </div>
      </div>
      <div>
        <p className="text-slate-500">{answer}</p>
      </div>
    </div>
  );
}

export default ChoiceCard;
