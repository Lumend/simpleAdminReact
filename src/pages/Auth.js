import { Link } from 'react-router-dom';

function Page() {
  return (
    <div>
      <h1>没有权限</h1>
      <p><Link to="/">返回首页</Link></p>
    </div>
  );
}

export default Page;
