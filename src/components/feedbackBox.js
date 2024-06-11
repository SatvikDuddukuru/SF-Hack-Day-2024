import { useState } from "react";
export default function FeedbackBox() {
    const [feedback, setFeedback] = useState('');
    
    return (
        <div className="w-3/4 mt-6 p-4 border-2 border-red-500 text-center">
          Hi
        </div>
      );
}