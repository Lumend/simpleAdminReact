import { Link } from 'react-router-dom';

function Page() {
  return (
    <div>
      <h1>404 NotFound</h1>
      <p><Link to="/">返回首页</Link></p>
    </div>
  );
}

export default Page;
