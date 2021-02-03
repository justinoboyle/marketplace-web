import React,{Component} from "react"
import Link from 'next/link'

export default class Header extends Component {
    render() {
        return (
        <div class="header-bar">
            <div class="primary-header">
                <ul class="header-options">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/"><a>Products ▾</a></Link></li>
                    <li><Link href="/product/test"><a>Services ▾</a></Link></li>

                </ul>
            </div>
            <div class="spacer-center"></div>
            <div class="secondary-header">
                <ul class="header-options">
                        <li><Link href="/"><a>Contact</a></Link></li>
                        <li><Link href="/"><a>About</a></Link></li>
                        <li><Link href="/"><a>Account</a></Link></li>
                </ul>
            </div>
        </div>
        );
    }
}