import styles from "./page.module.css";
//import {HashRouter as Router, Routes, Route} from 'react-router-dom';
//import {Login} from './login.js'
//import {Settings} from './settings.js'
//import {MainPage} from './mainpage.js'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Link href="/login">Login</Link>
    <Link href="/settings">Settings</Link>
    <Link href="/mainpage">Main Page</Link>
    </>
  );
}
