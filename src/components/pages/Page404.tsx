import { VFC, memo } from "react";
import { Link } from "react-router-dom";

export const Page404: VFC = memo(() => {
  return <Link to="/">ホームへ戻る</Link>;
});
