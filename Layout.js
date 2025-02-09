import Header from './Header';

const Layout = ({ children }) => (
    <>
        <Header />
        <main className="container mx-auto p-4">
            {children}
        </main>
    </>
);

export default Layout;
