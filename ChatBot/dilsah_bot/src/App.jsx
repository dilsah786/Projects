import { useState } from "react";
import Skelton from "./Skelton";
import { Audio, ThreeDots } from "react-loader-spinner";

export default function App() {
  const [questions, setQuestions] = useState("");
  const [answer, setAnswer] = useState(
    "Please provide me with some context or a question so I can assist you. Let me know how I can help! "
  );
  const [loading, setLoading] = useState(false);
  
  const getAns = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCPtMbkN-8S3korx87BAW8ALw3-XyJ7oEQ`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: questions }] }],
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      const res = data.candidates[0].content.parts[0].text; // Handle the response data as needed
      console.log(res);
      setAnswer(res);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(true);
    }

    console.log("Disabled");
  };

  return (
    <div className="w-4/5 m-auto">
      <h1 className="text-3xl font-semibold text-green-500 text-center mt-4">
        Dilsah chatBot
      </h1>

      <div className=" w-2/5 text-center  placeholder:text-center flex flex-col gap-6  justify-center items-center m-auto mt-10">
        <textarea
          rows={10}
          cols={40}
          className="rounded-xl border-slate-400 placeholder:text-center lg:text-xl md:text-xl text-base tracking-wider pl-2 pt-2 bg-slate-200"
          placeholder="Ask Your Questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
        ></textarea>
        <button
          onClick={getAns}
          className={`${
            loading
              ? "cursor-not-allowed bg-gray-300"
              : "cursor-pointer bg-white hover:text-blue-600"
          } font-medium rounded-md p-2`}
          disabled={loading} // Optionally disable the button when loading
        >
          {loading ? "Generating Ans..." : "Generate Ans"}
        </button>
      </div>
      {!loading ? (
        <div className="bg-slate-800 mt-10 p-4 mb-10 min-h-[50vh]">
          <pre className="text-white text-center text-wrap"> {answer} </pre>
        </div>
      ) : (
        <div className="flex justify-center  bg-slate-800 mt-10 min-h-[50vh] mb-10">
          <Skelton />
        </div>
      )}
    </div>
  );
}

{
  /* <p className="text-white text-2xl text-center mt-10 bg-slate-800 p-4" > Loading ... </p>       */
}
