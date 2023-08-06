import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のリスト</p>

        <ul className="list-row">
          <li>あああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のリスト</p>
        <ul className="list-row">
          <li>あああ</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
