import React from "react";
function App() {
  // <---- 자바스크립트 영역 ---->
  const handleCrick = () => {
    alert("안녕하세요.");
  };
  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: "100vh",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
      <span>이것은 내가 만든 APP 컴포넌트 입니다</span>
      <button
        onClick={function () {
          alert("안녕하세요.");
        }}
      >
        클릭!
      </button>
    </div>
  );
}

export default App;
