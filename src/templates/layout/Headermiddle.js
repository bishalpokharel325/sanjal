import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Headermiddle.css'
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

function Headermiddle() {   
    return (
        <div className="header__middle">
                    <div className="header__option"
                        >
                        <NavLink to="/news" activeClassName="header__option__active"
                        >
                            <HomeIcon fontSize="large"/>
                        </NavLink>
                </div>
                
                <div
                      className="header__option"   >
                    <NavLink to="/profile" activeClassName="header__option__active"
                        >
                        <SubscriptionsIcon fontSize="large"/>
                    </NavLink> 
                </div>
                <div
                      className="header__option"   >
                    <NavLink to="/signin" activeClassName="header__option__active"
                        >
                        <StorefrontIcon fontSize="large"/>
                    </NavLink>
                </div>
                <div
                      className="header__option"   >
                    <GroupIcon fontSize="large"/>
                </div>
                <div
                      className="header__option"   >
                    <VideogameAssetIcon fontSize="large"/>
                </div>          
            </div>
    )
}
export default Headermiddle
