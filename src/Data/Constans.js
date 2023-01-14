import {Colors} from '../Themes';
export const API_VERSION = '2.5';
export const BASE_URL = 'https://user1673281842743.requestly.dev';
export const API_STATUS = 'dev';
export const API_STATUS2 = 'staging';
export const Api_status3 = 'prod';
export const ZONE = 'London,uk';

export const DISTANCE = [1, 8, 16, 24, 48];

export const LOCATIONS = [
  {
    negara: 'London, UK',
    code: 'UK',
    forApi: 'London,uk',
    subTitle: '5648573567836458736',
  },
  {
    negara: 'Indonesia, ID',
    code: 'ID',
    forApi: 'Idonesia,id',
    subTitle: '5648573567836458736',
  },
  {
    negara: 'French, FR',
    code: 'FR',
    forApi: 'french,fr',
    subTitle: '5648573567836458736',
  },
];

export const DATA_SETTINGS = [
  {
    id: 1,
    name: 'Allow Notifications',
    active: true,
    iconName: 'notifications',
    colorBackground: Colors.notif,
  },
  {
    id: 2,
    name: 'Scheduled',
    active: false,
    iconName: 'notifications-circle-sharp',
    colorBackground: Colors.schedule,
  },
];

export const DATA_SETTINGS_WEATHER_UPDATE = [
  {
    id: 3,
    name: 'Precipitation Update',
    active: false,
    iconName: 'umbrella-outline',
    colorBackground: Colors.colarBlue,
  },
  {
    id: 4,
    name: 'Major Changes',
    active: false,
    iconName: 'ios-cloud-done',
    colorBackground: Colors.orange,
  },
  {
    id: 5,
    name: 'Morning Update',
    active: false,
    iconName: 'ios-sunny',
    colorBackground: Colors.orangeLight,
  },
  {
    id: 6,
    name: 'Evening Update',
    active: false,
    iconName: 'moon',
    colorBackground: Colors.darkPink,
  },
];

export const DATA_SETTINGS_SEVERE_UPDATE = [
  {
    id: 7,
    name: 'Lightning Tracker',
    active: false,
    iconName: 'thunderstorm',
    colorBackground: Colors.yellow,
  },
  {
    id: 8,
    name: 'Hurricane Tracker',
    active: false,
    iconName: 'ice-cream-sharp',
    colorBackground: Colors.red,
  },
  {
    id: 9,
    name: 'Severe Weather Alert',
    active: false,
    iconName: 'warning',
    colorBackground: Colors.purple,
  },
];

export const LANG = {
  eng: {
    opening: 'Find the best',
    secondOpening: 'coffee for you',
    searchDesc: 'search your coffee',
    next: 'Next',
    deskripsiPruduk: 'Description',
    size: 'Size',
    price: 'Price',
    order: 'Orders',
    payment: 'Payment',
    favorit: 'Your Favorit',
    logout: 'Logout',
    settingsDm: 'Settings Dark Mode',
    language: 'Language',
    wallet: 'Wallet',
  },
  idn: {
    opening: 'Temukan yang terbaik',
    secondOpening: 'kopi untukmu',
    searchDesc: 'cari kopi mu',
    next: 'Lanjut',
    deskripsiPruduk: 'Deskripsi',
    size: 'Ukuran',
    price: 'Harga',
    order: 'Pesananan',
    payment: 'Pembayaran',
    favorit: 'Favorit Anda',
    logout: 'Keluar',
    settingsDm: 'Pengaturan Mode Gelap',
    language: 'Bahasa',
    wallet: 'Dompet',
  },
};

export const DYNAMIC_THEME = {
  dark: {
    backgroundColor: '#1B1A17',
    cardColor: Colors.blue,
    textColor: '#fff',
  },
  light: {
    backgroundColor: '#fff',
    cardColor: Colors.red,
    textColor: '#444444',
  },
};
