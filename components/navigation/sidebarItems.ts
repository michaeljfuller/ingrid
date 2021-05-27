import SpeedIcon from '@material-ui/icons/Speed';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import HelpIcon from '@material-ui/icons/HelpOutlineOutlined';

import {SidebarItemProps} from "./Sidebar/SidebarItem";

export const mainItems = [
    { label: 'Dashboard', icon: SpeedIcon, href: '/' },
    { label: 'Buildings', icon: ApartmentIcon, href: '/buildings' },
    { label: 'Floors', icon: FilterNoneIcon, href: '/floors' },
    { label: 'Alerts', icon: ReportProblemOutlinedIcon, href: '/alerts' },
    { label: 'Files', icon: DescriptionOutlinedIcon, href: '/files' },
    { label: 'Folders', icon: FolderOpenOutlinedIcon, href: '/folders' },
    { label: 'Users', icon: AccountCircleOutlinedIcon, href: '/users' },
] as SidebarItemProps[];

export const miscItems = [
    { label: 'Settings', icon: SettingsIcon, href: '/settings' },
    { label: 'Help', icon: HelpIcon, href: '/help' },
] as SidebarItemProps[];
