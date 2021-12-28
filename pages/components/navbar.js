import Link from "next/link";
import { useRouter } from "next/router";



const Navbar = () => {
    const router = useRouter();
    const type = router.pathname.includes("customer") ? "/customer" : "/adm";

    console.log(type);
    return (
        <Link href={type}>
            <h1 style={{ cursor: "pointer" }} className="text-center">CRM</h1>
        </Link>
    )
}


export default Navbar;