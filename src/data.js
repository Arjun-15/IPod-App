export const Main ='Main'
export const MainMenuType = {
    ALBUM:'Album',
    MUSIC:'Music',
    GAMES:'Games',
    SETTINGS:'Settings',
 };
 export const Music = {
     ALLSONGS:'All Songs',
     PLAYLISTS:"PlayLists",
     ARTISTS: 'Artists',
     FAVOURITE: 'Favourite',
     ALBUM:'Albums',
    };
export const Games = {
    TIKTOK:'Tik Tok',
}
export const Settings = {
    CoverImage:'Cover Image'
}
export const Albums = ['https://cdn.freesound.org/displays/755/755285_16085454_wave_bw_M.png','https://cdn.freesound.org/displays/237/237375_1502374_wave_bw_M.png'];
export const Songs = ['https://cdn.freesound.org/previews/237/237375_1502374-lq.mp3','https://cdn.freesound.org/previews/524/524207_175205-lq.mp3'];





// get menu items 
export const MenuItems = (menu) => {
    switch(menu){
        case Main:
            return Object.values(MainMenuType);
        case MainMenuType.GAMES:
            return Object.values(Games);
        case MainMenuType.SETTINGS:
            return Object.values(Settings);
        default: 
            return null;
    }
}