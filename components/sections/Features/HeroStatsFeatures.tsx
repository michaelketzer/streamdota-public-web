import React, { ReactElement } from "react";
import FeatureList from "../../FeatureList";

const features = [
    {
        icon: <svg width="40" height="25" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg">
            <path d="M39.7266 37.625L29.6484 27.5469C29.4688 27.3672 29.2344 27.2734 28.9844 27.2734H28.1797C30.8594 24.375 32.5 20.5078 32.5 16.25C32.5 7.27344 25.2266 0 16.25 0C7.27344 0 0 7.27344 0 16.25C0 25.2266 7.27344 32.5 16.25 32.5C20.5078 32.5 24.375 30.8594 27.2734 28.1875V28.9844C27.2734 29.2344 27.375 29.4688 27.5469 29.6484L37.625 39.7266C37.9922 40.0937 38.5859 40.0937 38.9531 39.7266L39.7266 38.9531C40.0937 38.5859 40.0937 37.9922 39.7266 37.625ZM16.25 30C8.64844 30 2.5 23.8516 2.5 16.25C2.5 8.64844 8.64844 2.5 16.25 2.5C23.8516 2.5 30 8.64844 30 16.25C30 23.8516 23.8516 30 16.25 30Z" />
        </svg>,
        text: 'Preview hero stats in your dashboard before showing them on your stream',
    }, 
    {
        icon: <svg width="40" height="20" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.53047 12.5C1.15078 12.5 0 13.6195 0 15C0 16.3805 1.15078 17.5 2.53047 17.5C3.19351 17.5 3.82939 17.2366 4.29824 16.7678C4.76708 16.2989 5.03047 15.663 5.03047 15C5.03047 14.337 4.76708 13.7011 4.29824 13.2322C3.82939 12.7634 3.19351 12.5 2.53047 12.5V12.5ZM2.53047 0C1.15078 0 0 1.11953 0 2.5C0 3.88047 1.15078 5 2.53047 5C3.19351 5 3.82939 4.73661 4.29824 4.26777C4.76708 3.79893 5.03047 3.16304 5.03047 2.5C5.03047 1.83696 4.76708 1.20107 4.29824 0.732233C3.82939 0.263392 3.19351 0 2.53047 0V0ZM2.53047 25C1.15078 25 0 26.1195 0 27.5C0 28.8805 1.15078 30 2.53047 30C3.19351 30 3.82939 29.7366 4.29824 29.2678C4.76708 28.7989 5.03047 28.163 5.03047 27.5C5.03047 26.837 4.76708 26.2011 4.29824 25.7322C3.82939 25.2634 3.19351 25 2.53047 25V25ZM39.375 1.25H10.625C10.4592 1.25 10.3003 1.31585 10.1831 1.43306C10.0658 1.55027 10 1.70924 10 1.875V3.125C10 3.29076 10.0658 3.44973 10.1831 3.56694C10.3003 3.68415 10.4592 3.75 10.625 3.75H39.375C39.5408 3.75 39.6997 3.68415 39.8169 3.56694C39.9342 3.44973 40 3.29076 40 3.125V1.875C40 1.70924 39.9342 1.55027 39.8169 1.43306C39.6997 1.31585 39.5408 1.25 39.375 1.25ZM39.375 13.75H10.625C10.4592 13.75 10.3003 13.8158 10.1831 13.9331C10.0658 14.0503 10 14.2092 10 14.375V15.625C10 15.7908 10.0658 15.9497 10.1831 16.0669C10.3003 16.1842 10.4592 16.25 10.625 16.25H39.375C39.5408 16.25 39.6997 16.1842 39.8169 16.0669C39.9342 15.9497 40 15.7908 40 15.625V14.375C40 14.2092 39.9342 14.0503 39.8169 13.9331C39.6997 13.8158 39.5408 13.75 39.375 13.75ZM39.375 26.25H10.625C10.4592 26.25 10.3003 26.3158 10.1831 26.4331C10.0658 26.5503 10 26.7092 10 26.875V28.125C10 28.2908 10.0658 28.4497 10.1831 28.5669C10.3003 28.6842 10.4592 28.75 10.625 28.75H39.375C39.5408 28.75 39.6997 28.6842 39.8169 28.5669C39.9342 28.4497 40 28.2908 40 28.125V26.875C40 26.7092 39.9342 26.5503 39.8169 26.4331C39.6997 26.3158 39.5408 26.25 39.375 26.25Z" />
        </svg>,
        text: 'Select from a list of various stats, like GPM, XPM, Damage, support gold spent etc.',
    }, 
    {
        icon: <svg width="35" height="25" viewBox="0 0 35 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 32.5C20 33.8828 18.8828 35 17.5 35C16.1172 35 15 33.8828 15 32.5C15 30.8359 16.1172 30 17.5 30C18.8828 30 20 31.1172 20 32.5ZM35 3.75V36.25C35 38.3203 33.3203 40 31.25 40H3.75C1.67969 40 0 38.3203 0 36.25V3.75C0 1.67969 1.67969 0 3.75 0H31.25C33.3203 0 35 1.67969 35 3.75ZM32.5 3.75C32.5 3.0625 31.9375 2.5 31.25 2.5H3.75C3.0625 2.5 2.5 3.0625 2.5 3.75V36.25C2.5 36.9375 3.0625 37.5 3.75 37.5H31.25C31.9375 37.5 32.5 36.9375 32.5 36.25V3.75Z" />
        </svg>,        
        text: 'Tablets are covered on your dashboard and will automatically switch to hero stats after the draft',
    },
    {
        icon: <svg width="39" height="25" viewBox="0 0 39 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8672 18.8047L1.62734 23.7039C0.40625 24.0508 0.263281 25.7242 1.40703 26.2734L5.725 28.3469L0.991406 33.0805C0.0148437 34.057 0.0148437 35.6398 0.991406 36.6156L2.75859 38.3828C3.24688 38.8711 3.88672 39.1148 4.52656 39.1148C5.16641 39.1148 5.80625 38.8711 6.29453 38.3828L11.0281 33.6492L13.1016 37.9672C13.3555 38.4953 13.8484 38.7492 14.3406 38.7492C14.9141 38.7492 15.4844 38.4047 15.6719 37.7469L20.5719 20.507C20.8664 19.468 19.9055 18.5094 18.8672 18.8047V18.8047ZM14.0742 34.2203L11.7539 29.3883L4.52656 36.6156L2.75937 34.8484L9.98672 27.6211L5.15547 25.3L17.6164 21.7586L14.0742 34.2203ZM25.625 20C25.625 16.5539 22.8211 13.75 19.375 13.75C16.7391 13.75 14.4898 15.3961 13.5734 17.7102C17.818 16.5031 18.4898 16.25 19.375 16.25C21.443 16.25 23.125 17.932 23.125 20C23.125 20.8797 22.8828 21.5188 21.6648 25.8016C23.9789 24.8852 25.625 22.6359 25.625 20ZM19.6812 32.782C26.618 32.6148 32.1875 26.9758 32.1875 20C32.1875 12.918 26.4562 7.1875 19.375 7.1875C12.3977 7.1875 6.76016 12.7578 6.59297 19.6938L9.16719 18.9625C9.69687 13.768 14.0438 9.6875 19.375 9.6875C25.0617 9.6875 29.6875 14.3133 29.6875 20C29.6875 25.3305 25.6063 29.6781 20.4133 30.2078L19.6812 32.782V32.782ZM19.375 0.625C8.67422 0.625 0 9.29922 0 20C0 20.5703 0.0367188 21.132 0.0851563 21.6898C0.355469 21.5359 0.632031 21.3875 0.94375 21.2992L2.54297 20.8445C2.52891 20.5633 2.5 20.2852 2.5 20C2.5 10.6953 10.0703 3.125 19.375 3.125C28.6797 3.125 36.25 10.6953 36.25 20C36.25 29.3047 28.6797 36.875 19.375 36.875C19.0898 36.875 18.8117 36.8461 18.5305 36.832L18.0758 38.4305C17.9867 38.7445 17.8297 39.0164 17.6742 39.2883C18.2359 39.3375 18.8008 39.3742 19.375 39.3742C30.0758 39.3742 38.75 30.7 38.75 19.9992C38.75 9.29844 30.0758 0.625 19.375 0.625Z" />
        </svg>,
        text: 'Show stats with a single click on your dashboard',
    }, 
    {
        icon: <svg width="40" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75001 20.625C7.71094 20.625 6.87501 21.4609 6.87501 22.5C6.87501 23.5391 7.71094 24.375 8.75001 24.375C9.78907 24.375 10.625 23.5391 10.625 22.5C10.625 21.4609 9.78907 20.625 8.75001 20.625ZM11.25 11.875C10.2109 11.875 9.37501 12.7109 9.37501 13.75C9.37501 14.7891 10.2109 15.625 11.25 15.625C12.2891 15.625 13.125 14.7891 13.125 13.75C13.125 12.7109 12.2891 11.875 11.25 11.875ZM20 0C18.6797 0 17.3281 0.125 15.9609 0.390625C8.19532 1.90625 1.93751 8.14844 0.406255 15.8906C-2.29687 29.5703 9.09376 40 18.7109 40C19.3594 40 20 39.9531 20.6328 39.8516C23.8516 39.3516 25.4297 35.5859 23.9531 32.6875C22.1484 29.1406 24.7266 25 28.7109 25H34.9375C37.7344 25 40 22.6875 40.0078 19.8984C39.9688 8.89844 31.0234 0 20 0ZM34.9297 22.5H28.7031C25.9453 22.5 23.4375 23.8984 22.0078 26.2344C20.5859 28.5547 20.4766 31.3906 21.7188 33.8281C22.1016 34.5781 22.0938 35.5156 21.7109 36.2734C21.5234 36.6328 21.0938 37.2578 20.25 37.3906C19.7578 37.4688 19.2422 37.5078 18.7109 37.5078C14.4453 37.5078 9.79688 35.0625 6.56251 31.1328C3.12501 26.9453 1.80469 21.7109 2.85938 16.3906C4.19532 9.625 9.65626 4.1875 16.4453 2.85937C17.6328 2.625 18.8281 2.50781 20 2.50781C29.6172 2.50781 37.4688 10.3125 37.5 19.8984C37.5 21.3281 36.3438 22.5 34.9297 22.5V22.5ZM28.75 10.625C27.7109 10.625 26.875 11.4609 26.875 12.5C26.875 13.5391 27.7109 14.375 28.75 14.375C29.7891 14.375 30.625 13.5391 30.625 12.5C30.625 11.4609 29.7891 10.625 28.75 10.625ZM18.75 6.875C17.7109 6.875 16.875 7.71094 16.875 8.75C16.875 9.78906 17.7109 10.625 18.75 10.625C19.7891 10.625 20.625 9.78906 20.625 8.75C20.625 7.71094 19.7891 6.875 18.75 6.875Z" />
        </svg>,
        text: 'Match the overlays to your streaming resolution with ease',
    }, 
]

export default function HeroStatsFeatures(): ReactElement {
    return <FeatureList features={features} iconColor={'#CA054D'} />;
}