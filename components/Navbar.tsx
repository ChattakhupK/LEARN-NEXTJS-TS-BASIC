import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between text-2xl p-2 bg-black text-white shadow-md">
        <div className="flex gap-4">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/info">INFO</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/login">LOGIN</Link>
          <Link href="/register">REGISTER</Link>
        </div>
      </nav>
      <hr className="mb-4" />
    </>
  );
};
export default Navbar;
