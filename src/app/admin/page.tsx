import { GetStaticProps } from 'next';

const AdminDashboard = (): JSX.Element | null => <h1>Admin</h1>;

export default AdminDashboard;

export const getStaticProps: GetStaticProps = (ctx) => {

  return {
    props: {
      noLayout: true,
    }
  }
}