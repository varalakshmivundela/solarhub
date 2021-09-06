import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const navigationmenu = [
    {
        id: 1,
        linkText: 'Home',
        link:'/',
       /* child: true,
        submenu: [
            {
                id: 11,
                link: '/',
                linkText: 'Home One'
            },
            {
                id: 12,
                link: '/home-v2',
                linkText: 'Home Two'
            },
            {
                id: 13,
                link: '/home-v3',
                linkText: 'Home Three'
            },
        ]
    */
    },
    {
        id: 2,
        linkText: 'Products',
        link: '/about'
    },
    {
        id: 3,
        linkText: 'Technologies',
        link: '/about'
    },
    {
        id: 4,
        linkText: 'Services',
        child: true,
        submenu: [
            {
                id: 31,
                link: '/services',
                linkText: 'Engineering,Procurement and Construction'
            },
            {
                id: 32,
                link: '/service-details',
                linkText: 'Operations and Maintainace'
            },
            {
                id: 33,
                link: '/service-details',
                linkText: 'Annual Maintainace Contracts(AMC)'
            },
            {
                id: 34,
                link: '/service-details',
                linkText: 'Installation Services'
            },
            {
                id: 35,
                link: '/service-details',
                linkText: 'Dismantling and Re Commissioning/Errections'
            },
            {
                id: 36,
                link: '/service-details',
                linkText: 'Plant and Equipment Reclying'
            },
        ]
    },
    {
        id: 4,
        linkText: 'Solutions',
        child: true,
        submenu: [
            {
                id:37,
                link:'/on-grid',
                linkText:'Solar OnGrid Ground Mount Solutions'

            },
            {
                id:38,
                link:'/off-grid',
                linkText:'Solar Off Grid Roof Top Solutions'

            },
            {
                id:39,
                link:'/off-grid-mount',
                linkText:'Solar Off Grid Grount Mount Solutions'
            },
            {
                id:40,
                link:'/ongrid-offgrid-shed',
                linkText:'Solar OnGrid And Off Grid Shed Mount Solutions'
            },
            {
                id:41,
                link:'/evc',
                linkText:'Eletric Vehicle Charge Stations'
            },
            {
                id:42,
                link:'/home-lighting',
                linkText:'DC Home Lighiting'
            },
            {
                id:43,
                link:'/streetlights',
                linkText:'Solar Street Lights'

            },
            {
                id:44,
                link:'/solar-ev',
                linkText:'Solar Electric Vehicles'
            }
            

        ]
    },


    {
        id: 5,
        linkText: 'About',
        child: true,
        submenu: [
            {
                id: 45,
                 linkText: 'About',
                 link: '/about'
            },
            {
                id: 46,
                link: '/why-us',
                linkText: 'Why Choose Us'
            },
            {
                id: 47,
                linkText: 'Team',
                child: true,
                submenu:[
                    {
                        id:421,
                        link: '/team',
                        linkText: 'Team'
                    },
                    {
                        id:422,
                        link: '/team-details',
                        linkText: 'Team Details'
                    },
                ]
            },
            {
                id: 48,
                linkText: 'News',
                child: true,
                submenu:[
                    {
                        id:441,
                        link: '/blog-standard',
                        linkText: 'News Standard'
                    },
                    {
                        id:442,
                        link: '/blog-grid',
                        linkText: 'News Grid'
                    },
                    {
                        id:443,
                        link: '/blog-details',
                        linkText: 'News Details'
                    },
                ]
            },
            {
                id: 49,
                link: '/faq',
                linkText: "FAQ's"
            },
        ]
    },
    // {
    //     id: 6,
    //     linkText: 'News',
    //     child: true,
    //     submenu:[
    //         {
    //             id:51,
    //             link: '/blog-standard',
    //             linkText: 'News Standard'
    //         },
    //         {
    //             id:52,
    //             link: '/blog-grid',
    //             linkText: 'News Grid'
    //         },
    //         {
    //             id:53,
    //             link: '/blog-details',
    //             linkText: 'News Details'
    //         },
    //     ]
    // },
    {
        id: 6,
        linkText: 'Markets',
        link: '/contact'
    },
    {
        id: 7,
        linkText: 'Funding',
        link: '/contact'
    },
    {
        id: 8,
        linkText: 'Calculators',
        link: '/contact'
    },
    {
        id: 9,
        linkText: 'Contact Us',
        link: '/contact'
    },
    {
        id: 10,
        linkText: 'Register',
        link: '/register'
    },
    {
        id: 11,
        linkText: 'Login',
        link: '/contact'
    },
    
]

class Menu extends Component {
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.submenu') !== undefined) ? this.getNextSibling(e.target, '.submenu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block';
        }
    }
    render() {
        return (
            <ul>
                {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                    <li key={i} className={`${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="submenu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="submenu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li key={i}><Link
                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}
            </ul>
        );
    }
}

export default Menu;