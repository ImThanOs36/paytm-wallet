import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "../components/ui/Dropdown"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/Card"
import { Label } from "../components/ui/Label"
import { Input } from "../components/ui/Input"
import { Users } from "../components/Users"
import {Balance} from "../components/Balance"
import Transactions from "../components/Transactions"
export default function Testing() {
    return (
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">

        <div className="hidden border-r bg-gray-100/40 lg:block ">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link to={"/"} className="flex items-center gap-2 font-semibold">
                            <WalletIcon className="h-6 w-6" />
                            <span className="">Acme Wallet</span>
                        </Link>
                            <div>

                            <BellIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                            </div>
                       
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                to={"/"}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 "

                            >
                                <HomeIcon className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                to={"/"}
                                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 "

                            >
                                <WalletIcon className="h-4 w-4" />
                                Transactions
                            </Link>
                            <Link
                                to={"/"}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 "

                            >
                                <SendIcon className="h-4 w-4" />
                                Send Money
                            </Link>
                            <Link
                                to={"/"}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 "

                            >
                                <ReceiptIcon className="h-4 w-4" />
                                Receive Money
                            </Link>
                            <Link
                                to={"/"}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 "

                            >
                                <SettingsIcon className="h-4 w-4" />
                                Settings
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>


            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 ">
                    <Link to={"/"} className="lg:hidden" >
                        <WalletIcon className="h-6 w-6" />
                        <span className="sr-only">Dashboard</span>
                    </Link>
                    <div className="flex-1">
                        <h1 className="font-semibold text-lg">Dashboard</h1>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <div>
                            
                                <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                                <span className="sr-only">Toggle user menu</span>
                          </div> 
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>


                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-[#F7F7F7]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Balance</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div className="text-4xl font-bold"> <Balance/> </div>
                                <Button variant="secondary" size="sm">
                                    Withdraw
                                </Button>
                            </CardContent>
                        </Card>
                        <Users/>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send Money</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="recipient">Recipient</Label>
                                            <Input id="recipient" placeholder="Enter recipient's email or phone number" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="amount">Amount</Label>
                                            <Input id="amount" type="number" placeholder="Enter amount" />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Send
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    <Transactions/>

                    </div>
                </main>
            </div>
        </div>
    )
}

function BellIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function ReceiptIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 17.5v-11" />
        </svg>
    )
}


function SendIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}


function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function WalletIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
    )
}

