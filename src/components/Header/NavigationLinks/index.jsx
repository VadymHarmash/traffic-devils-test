import React from 'react'

export default function NavigationLinks() {
    const links = [
        {
            id: 1,
            href: '#',
            text: 'Informazioni'
        },
        {
            id: 2,
            href: '#',
            text: 'CEO'
        },
        {
            id: 3,
            href: '#',
            text: 'Iniziare a guadagnare subito'
        }
    ]

    return (
        <ul>
            {links && links.map((link) => (
                <li key={link.id}>
                    <a href={link.href}>{link.text}</a>
                </li>
            ))}
        </ul>
    )
}
