import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Books = (props: SvgProps) => (
  <Svg
    
    width={100}
    height={100}
    viewBox="0 0 2000 2000"
    fill={"#7f5539"}
    {...props}
  >
    <Path d="M739 600.9c-6.7 2.1-16.9 9.8-15.3 11.5.3.3.2.6-.4.6-2.5 0-4.1 11.4-3.9 28.3 0 10.5-.3 16.7-.9 16.8-.5.1-15.4.2-33 .4-18 .1-33.8.6-36.2 1.2-2.3.6-4.4.8-4.8.5-.3-.3-.5 0-.5.6 0 .7-.6 1.2-1.3 1.2-.8 0-3.3 1.3-5.5 3-2.3 1.6-4.5 3-4.9 3-1.2 0-8.3 8.1-8.3 9.4 0 .7-.9 2.1-2 3.1-1 .9-1.9 2-1.8 2.4.1.3-.4 1.8-1 3.4-2.9 7-3.2 18.7-3.3 155.2-.1 125 .3 167.3 1.8 169.8.5.9 1.3 6.1 1.5 10 .1 1.5.5 3 1 3.3.4.3.8 2.3.8 4.4 0 2.1.4 4 .9 4.2.5.1 1 1.9 1.2 3.8.2 1.9.7 4 1.1 4.6.4.6.9 2.4 1.1 4 .2 1.7.6 3.4.9 3.9.7 1.2 4.7 13.8 5.1 16.2.2 1 1 3.1 1.7 4.8.7 1.6 1.4 3.2 1.4 3.5.1.3.8 2.4 1.8 4.5 1.9 4.6 2.8 7.3 2.7 8.1 0 .4.4 1 .9 1.3.6.3 1.2 1.5 1.4 2.6.1 1.1.5 2.2.9 2.5.3.3 1.3 2.7 2.4 5.5 1 2.7 2.9 6.5 4.1 8.4 1.3 1.9 2.1 3.8 1.8 4.3-.3.4-.1.8.5.8.5 0 1.5 1.6 2.1 3.5.6 1.9 1.5 3.5 1.9 3.5.4 0 1.3 1.7 2 3.7.8 2.1 1.7 4 2 4.3.8.7 2.8 3.9 4.3 7 .7 1.4 1.6 2.7 1.9 3 .4.3 1.7 2.6 2.9 5.2 1.2 2.7 2.6 4.8 3.1 4.8s2.2 2.4 3.9 5.3c1.6 2.9 3.8 6.1 4.8 7.2 1 1.1 3.3 4.2 5.2 7 1.9 2.7 3.9 5.6 4.6 6.2.7.7 2.2 2.8 3.4 4.8 1.2 1.9 2.6 3.5 3.1 3.5s.9.5.9 1c0 1.9 34.6 37.2 47 48 3.5 3 7 6.2 7.9 7.1.9.9 5.4 4.3 10.1 7.5 4.7 3.2 9.1 6.3 9.8 7 .6.7 2.1 1.6 3.2 1.9 1.1.3 2 1.1 2 1.6s.6.9 1.4.9c.8 0 1.6.3 1.8.7.5 1.2 6.1 4.9 8.6 5.7 1.2.4 2.2 1.2 2.2 1.7s.6.9 1.4.9c.7 0 2.4.8 3.7 1.9 2.3 1.8 6.3 4.1 14.4 8.4 2.2 1.2 4.8 2.8 5.8 3.6.9.8 1.7 1.1 1.7.7 0-.4 1.9.6 4.3 2.2 2.3 1.6 5.3 3.3 6.7 3.7 1.4.4 4.1 1.5 6 2.6 1.9 1 5.1 2.4 7 3.2 1.9.8 5.8 2.5 8.5 3.7 2.8 1.3 6.8 2.9 9 3.6 2.2.7 7 2.4 10.7 3.7 3.7 1.4 6.9 2.2 7.2 1.9.3-.2 1.2 0 1.9.6.8.7 1.7.9 2 .5.4-.3.7-.1.7.6s.4 1 .9.7c.5-.4 2.2-.1 3.8.5 1.5.6 4.2 1.3 5.8 1.6 1.7.3 5.6 1.4 8.9 2.4 3.2 1.1 6.1 1.8 6.3 1.5.3-.3 1.9.2 3.5 1s3.3 1.2 3.8.9c.5-.3 1.8-.2 2.7.3 1 .6 3.6 1.2 5.8 1.5 2.2.2 4.7.7 5.5 1 .8.3 3.8.8 6.5 1.1 5.4.6 12.2 1.5 17 2.2 1.7.2 6.2.7 10 1 3.9.3 9.9.9 13.5 1.3 14.3 1.5 51.2.5 69.9-2 4.1-.5 7.6-.7 7.8-.5.2.2 3-.2 6.1-.9 5.1-1.2 8.7-1.8 17.5-3.1 1.5-.2 3.7-.8 4.7-1.4 1.1-.6 2-.9 2-.6 0 .3 2.3-.2 5.1-1 2.8-.9 5.3-1.3 5.6-1 .3.2 1.7 0 3.2-.6 1.4-.6 5.1-1.7 8.1-2.4 3-.8 6-1.6 6.5-1.8.6-.1 2.4-.6 4-1.1 1.7-.4 3.6-1.2 4.3-1.8.6-.5 1.2-.7 1.2-.3 0 .3 1.6-.1 3.7-.9 2-.8 3.8-1.3 4.1-1 .2.2 1.4-.2 2.6-1 1.1-.8 3-1.5 4.2-1.5 1.1 0 2.4-.3 2.8-.7 1-1 9.8-4.3 11.4-4.3.8 0 2.8-1 4.5-2.2 1.8-1.3 3.3-2.2 3.5-2 .7.7 3.3 0 4.6-1.4.9-.8 1.6-1.3 1.6-.9 0 .3 1.5-.2 3.3-1.2 1.7-.9 3.7-1.8 4.2-1.9.6-.1 3.9-1.8 7.5-3.9 3.6-2 8.4-4.5 10.7-5.6 2.3-1 4.5-2.4 4.8-2.9.4-.6 1.1-.8 1.6-.5.5.4.9.2.9-.3s1.2-1.6 2.8-2.4c1.5-.7 4.5-2.5 6.7-3.8 2.2-1.4 4.3-2.4 4.8-2.2.4.1.7-.3.7-.8 0-.6 1.2-1.6 2.8-2.3 1.5-.7 4.7-2.6 7.1-4.2 2.4-1.7 5.8-3.8 7.5-4.8 1.7-1 3.6-2.4 4.1-3.1.6-.7 3.6-2.9 6.8-5 3.1-2.1 7-5.1 8.5-6.7 1.5-1.6 3.1-2.9 3.6-2.9 1 0 3.2-2 12.2-10.8 3-2.9 5.4-5.1 5.4-4.8 0 .3 3.2-2.7 7-6.6 3.9-3.9 7-7.5 7-8s.5-.6 1-.3c.6.3 1 .3 1-.2 0-.4 2.4-3.3 5.3-6.5 2.8-3.1 6.8-7.5 8.7-9.8 1.9-2.3 4.1-4.8 4.8-5.5.6-.8 1.2-1.7 1.2-2.1 0-.4 1.2-1.8 2.8-3.2 1.5-1.3 2-2.1 1.2-1.6-.8.4.3-1.3 2.5-3.8s5.8-7.1 8-10.3c2.2-3.2 4.6-6.4 5.3-7.1.7-.7 1.3-1.7 1.2-2.1 0-.4.7-1.6 1.5-2.6s2.3-3.2 3.3-5c1-1.7 3.1-5.2 4.7-7.7 4.4-6.8 9.5-16.1 9.5-17.2 0-.5.7-1.6 1.5-2.4.8-.9 1.8-2.7 2.2-4.2.3-1.5 1.2-3.3 2-4 .7-.8 1.1-1.7.8-2.2-.3-.4.2-1.3 1-2s1.5-2.1 1.5-3.1c0-1.1.5-1.9 1.2-1.9.6 0 .9-.3.5-.6-.3-.4.5-2.6 1.8-5 1.4-2.4 2.4-4.7 2.4-5-.1-.2.8-2.7 2-5.4 1.2-2.8 2.1-5.2 2.1-5.5 0-.3.6-1.8 1.5-3.5.8-1.6 1.5-3.8 1.5-5 0-1.1.5-2 1.2-2 .6 0 .8-.3.5-.7-.4-.3-.2-1.2.4-2 .6-.7.8-1.3.5-1.3-.4 0-.2-.9.4-2.1.7-1.1 1.3-3.3 1.5-4.7.2-1.5.8-3.8 1.3-5.2.5-1.4 1.1-3 1.2-3.5.1-.6.5-1.5 1-2 .7-.9 2-5.9 2.5-9.5.1-.8.5-2.2.8-3 .6-1.6 1.7-7.5 2.3-12.3.2-1.6.6-3.2.8-3.5.2-.4.7-4.3 1.1-8.7.4-4.4 1-11.8 1.4-16.5.9-10.9.6-291.7-.3-295-.4-1.4-.8-3.2-.9-4-.2-.8-1-3-2-4.7-1-1.8-1.8-3.5-1.8-3.8-.3-2.3-1.3-4.5-2-4.5-.5 0-.9-.7-.9-1.5s-.5-1.5-1.2-1.5c-.6 0-.9-.2-.6-.5 1.5-1.5-11.1-12.3-16.4-14.1-1-.4-1.8-1.1-1.8-1.7 0-.6-.2-.8-.5-.5-.3.3-2.9 0-5.8-.6-3.4-.8-16.1-1.2-36.9-1.1H1283v-18.2c0-10-.4-18.4-.9-18.7-.4-.3-1.1-2.1-1.4-4-.6-3.8-1.3-4.9-6.9-10.5-4.8-4.8-11.5-6.6-21.9-5.7-9.2.7-14.5 1.4-18.4 2.7-1.6.5-4.3 1.1-6 1.3-1.6.3-4.8 1-7 1.6-7.5 2-16.1 4.1-18.5 4.4-.8.1-2.8.8-4.3 1.4-1.5.7-3.1 1.1-3.5 1-1.5-.3-8.2 1.5-8.8 2.3-.3.5-1.5.9-2.7.9-1.2 0-3.4.6-4.8 1.4-1.5.7-7.6 3-13.5 5-6 2-11.8 4.1-12.9 4.7-1.2.6-2.7 1.1-3.5 1.3-.8.1-3.1 1-5 1.9-2 1-4.5 1.9-5.5 2.1-1.1.3-4.9 1.9-8.5 3.6-8.2 4.1-11.3 5.4-12.2 5.2-.5-.1-.8.3-.8.9 0 .5-.4.8-.9.5-.5-.3-1.9.2-3.2 1.2-1.3 1-4.4 2.7-6.9 3.7-2.5 1.1-6.3 3.2-8.5 4.6-2.2 1.5-5 3-6.2 3.3-1.3.4-2.3 1.2-2.3 1.7 0 .6-.4.8-.9.5-.5-.3-1.4.1-2.1.9-.7.8-1.8 1.5-2.5 1.5s-1.6.7-1.9 1.6c-.3.8-1 1.3-1.5 1-.5-.4-1.1-.2-1.3.2-.1.4-3 2.6-6.3 4.7-3.3 2.2-6.2 4.2-6.5 4.5-.3.3-3 2.4-6 4.6-3 2.3-6.6 5.1-8 6.3-1.4 1.2-4.7 4.1-7.4 6.4-6.3 5.4-21.6 20.4-21.6 21.2 0 .3-1.9 2.5-4.1 4.9-2.3 2.4-4.1 4.6-4 5 0 .3-.6 1.4-1.5 2.3-3.9 4.5-6.4 7.9-6.4 9 0 .7-.4 1.3-1 1.3-.5 0-1 .6-1 1.3 0 .8-.9 2.2-1.9 3.1-2.1 1.9-2.4 1.6-6.5-6.9-.8-1.7-2.4-3.9-3.5-4.9-1.2-1.1-2.1-2.3-2.1-2.9 0-.5-.8-1.7-1.8-2.6-.9-.9-2.9-3.2-4.4-5.1-5.8-7.8-33.2-34.4-38.7-37.4-.9-.5-4.1-3.1-7.2-5.8-3.1-2.6-6-4.8-6.4-4.8-.5 0-3.2-1.8-6.2-4-2.9-2.3-5.3-3.8-5.3-3.5 0 .3-1.2-.6-2.7-2-1.6-1.4-4.3-3-6-3.6-1.8-.6-3.3-1.4-3.3-1.9s-1.6-1.4-3.5-2.1c-1.9-.7-3.5-1.7-3.5-2.1 0-.4-.9-.8-1.9-.8-1.1 0-2.7-.7-3.5-1.6-.9-.8-1.6-1.3-1.6-1 0 .4-1.8-.5-4-1.9s-4.2-2.5-4.5-2.5c-.3 0-2.9-1.2-5.8-2.6-2.8-1.4-6.1-2.7-7.1-2.9-1.1-.3-2.2-.8-2.5-1.2-.3-.5-1-.9-1.6-1-2.3-.5-10.1-3.4-11.7-4.3-2.4-1.3-12.8-4.9-12.8-4.4 0 .2-1.8-.5-4-1.6-2.1-1.1-5-2-6.4-2-1.4 0-2.8-.5-3.1-1-.3-.6-1.7-1-3.1-1-1.3 0-2.4-.5-2.4-1.1 0-.5-.4-.7-1-.4-.5.3-2.3-.1-4-1-1.6-.8-3.2-1.5-3.5-1.5-1.2 0-3.8-.5-5.5-1.2-2.2-.9-10.9-2.9-15-3.5-1.9-.3-4.3-.9-5.2-1.4-.9-.5-3-.9-4.5-.9-1.6 0-3.4-.5-3.9-1-.6-.6-2.8-1.2-5-1.5-5.8-.7-19.2-3.2-20.1-3.8-1.6-1-15.8-1.6-18.3-.8zm41 65.5c2.9.5 14.4 3.4 17 4.4 2.3.8 2.2.8 6.5 1.6 2.2.5 5.4 1.4 7 2.1 1.7.7 4.4 1.7 6 2.1 1.7.4 3.2.8 3.5.9.3.1 2 .6 3.8 1 1.7.4 3.2 1.2 3.2 1.7s.5.6 1 .3c.6-.3 1-.2 1 .3s1.5 1.2 3.3 1.5c1.7.3 5.7 1.6 8.7 3 3 1.4 6 2.6 6.5 2.7.6.1 1.9.7 3 1.3 1.1.6 2.3 1.1 2.7 1.2.4 0 1.3.6 2 1.2.6.7 1.6 1.3 2.2 1.3 1.1 0 17.9 8.2 18.6 9.1.8 1 5.5 3.3 6.3 3.1.4-.1.7.3.7.8 0 .6.7 1 1.5 1s1.5.4 1.5 1c0 .5.7 1 1.5 1s1.5.4 1.5 1c0 .5.7 1 1.5 1s1.5.4 1.5 1c0 .5.6 1 1.3 1 .7 0 2.3.9 3.5 2 1.2 1.1 2.6 2 3.1 2 .6 0 1.4.6 1.8 1.3.4.6 2.6 2.5 4.8 4.2 7.4 5.5 27.6 24.5 26.1 24.5-.4 0 .6 1.2 2.3 2.6 1.7 1.4 3.1 3.2 3.1 3.9 0 .8.6 1.8 1.4 2.2.7.4 2.1 2.3 3 4.1.9 1.8 2.5 4.1 3.5 5.1 1.9 1.9 2.5 2.9 7.6 12.8 1.7 3.2 3.3 6 3.6 6.3.4.3 1 2 1.4 3.7.3 1.8 1 3.3 1.4 3.3 1 0 3.3 5.1 2.6 5.8-.2.3 0 1.1.6 1.9.6.7.9 1.3.5 1.3s.1 1.4 1 3.1c1.4 2.9 2.2 5.1 2.9 8.9.1.8.5 2.2.8 3 1.3 3.3 1.9 13.7 2.1 36.3.1 13.1-.1 24.2-.4 24.7-.3.5-4.8-3.3-10-8.5s-10.1-9.5-10.8-9.5c-.7 0-1-.5-.7-1 .3-.6.1-1-.5-1-.9 0-3.7-2.1-14.3-10.6-.9-.8-2.2-1.4-2.7-1.4-.6 0-1-.5-1-1 0-.6-.7-1-1.5-1s-1.5-.4-1.5-.9-2.1-1.9-4.7-3.1c-2.7-1.2-5.2-2.8-5.6-3.6-.4-.8-1.4-1.4-2.2-1.4-.7 0-2-.6-2.7-1.3-.7-.6-3.6-2.3-6.3-3.7-2.8-1.3-5.2-2.7-5.5-3.1-.3-.3-2.9-1.4-5.7-2.4-2.9-1.1-5.3-2.3-5.3-2.7 0-.4-.9-.8-2-.8s-2-.5-2-1c0-.6-.7-1-1.5-1s-3.9-1.1-7-2.4c-3-1.4-5.5-2.2-5.5-1.9 0 .3-.9-.2-2-1.2s-2-1.5-2-1.2c0 .4-2-.2-4.5-1.3s-4.9-2-5.3-2.1c-.4-.1-1.7-.5-3-1s-2.8-.9-3.4-.9c-1.5 0-7.8-2-10.1-3.2-1-.5-3.1-1.1-4.5-1.3-1.5-.2-6.5-1.3-11.2-2.6-9.9-2.6-17.7-3-20.6-1.2-1.1.7-2.3 1.1-2.6.8-.2-.3-2.3 1.2-4.6 3.4-3.1 2.9-4.6 5.5-6.1 10.6-1.2 3.7-1.9 7-1.6 7.4.2.4.7 2.3 1 4.2 1.6 9 9.8 16.8 19.5 18.3 4 .6 14.6 3.1 20.5 4.8 2.2.6 4.2 1.2 4.5 1.3.3.1 2.1.5 4 .9 1.9.5 4 1.2 4.5 1.6.6.4 3.3 1.3 6 2 2.8.7 5.4 1.7 6 2.1.5.5 1.7.9 2.7.9 1 0 1.8.4 1.8 1 0 .5.8 1 1.7 1 5.2 0 53.3 26.3 53.3 29.2 0 .4.7.8 1.5.8.9 0 1.8.7 2.1 1.5.4.8 1.1 1.5 1.8 1.5.6 0 3.2 1.8 5.6 4 4.2 3.8 9.2 8 13.5 11.5 1.1.9 1.4 1.3.6.9-.9-.5-1.2-.3-.7.4.4.7 1.4 1.2 2.2 1.2.8 0 1.4.7 1.4 1.5s.6 1.5 1.3 1.5c.7 0 2.1 1.2 3.2 2.7 1.1 1.5 3.4 4.3 5 6.3 7.1 8.2 15.3 22.7 16.6 29.1.6 3 1.3 6.5 1.6 7.9.5 2.3.7 9.1.4 13.2-.2 3.3-2.5 1.9-11.7-7-11.4-10.8-14.1-13.2-17.9-15.6-1.6-1-3.7-2.5-4.5-3.3-.8-.7-3.3-2.7-5.5-4.3-2.2-1.6-4.5-3.4-5.1-3.9-.7-.5-3.6-2.2-6.5-3.7-3-1.6-6.3-3.6-7.3-4.6-1-.9-2.3-1.5-2.8-1.2-.4.3-.8.1-.8-.5s-1.1-1.3-2.5-1.7c-1.4-.3-2.5-.9-2.5-1.3 0-.3-2.7-1.7-6.1-3.1-3.3-1.4-6.9-3.3-8-4.3-1-1-1.9-1.5-1.9-1.3 0 .3-2-.5-4.4-1.9-2.4-1.3-4.6-2.2-4.9-1.9-.3.3-1.6 0-2.9-.7-1.2-.7-2.6-1.2-3-1.1-.3.1-1.2-.5-1.8-1.3-.7-.8-2-1.5-3-1.5-.9 0-6-1.6-11.1-3.6-5.2-1.9-10.5-3.7-11.9-4-1.3-.3-3-1-3.7-1.6-.7-.6-1.3-.8-1.3-.4 0 .3-1.1.1-2.5-.4-2.7-1-7.1-2.1-9.2-2.2-.7-.1-1.3-.6-1.3-1.1 0-.6-.3-.8-.6-.5-.3.4-2 .2-3.7-.4-5.5-1.7-15.4-1.8-19.7-.1-4.5 1.8-9.5 6.9-11.6 11.8-2.9 7-1.2 16.2 4.2 23.6 3.9 5.3 10.8 8.6 23.9 11.4 4.4.9 8.8 2 9.7 2.6 1 .5 2.7.9 3.7.9 1.1 0 3 .4 4.3.9 1.3.5 5 1.7 8.3 2.7 3.3.9 6.5 2 7 2.4.6.3 3 1.3 5.5 2 2.5.8 4.7 1.8 5 2.2.3.4 1.5.9 2.5 1.1 3.2.6 15.9 6.9 17.3 8.6.8.9 1 1 .7.3-.6-1.1-.3-1.1 1.4 0 1.2.7 2.1 1.6 2.1 2.1 0 .4.5.5 1 .2.6-.3 1-.1 1 .4 0 .6.5 1.1 1 1.1 1.5 0 16.4 8.8 18.8 11.1 1.2 1 2.5 1.9 3.1 1.9.5 0 1.1.4 1.3.8.2.5 2.3 2.2 4.8 3.9 2.5 1.7 6.4 4.9 8.6 7 2.3 2.1 6.7 6 9.7 8.8 3.1 2.7 5.4 5.2 5.1 5.4-.2.3 1.7 2.4 4.3 4.8 2.7 2.3 4.4 4.3 3.9 4.3-.5 0 0 .8 1 1.7 2.3 2.1 7.4 9.8 7.4 11.2 0 .5.7 1.1 1.5 1.5.8.3 1.4.9 1.3 1.3-.2.9 2.3 6.5 3.2 7.3.8.6 2.9 5.8 3.5 8.5 3.2 13.6 3.3 15.8 3.3 53 0 20.9-.2 38.3-.4 38.7-.4.7-2-.8-12.2-11.6-2.9-3.1-5.5-5.6-5.8-5.6-.3 0-2.4-1.9-4.7-4.3-4.3-4.3-8.7-8-12.7-10.7-1.2-.8-3.4-2.5-4.8-3.7-1.5-1.3-3-2.3-3.4-2.3-.4 0-1.8-1.1-3.2-2.5-1.4-1.4-2.9-2.5-3.3-2.5-1 0-9.2-5.4-11.3-7.3-.8-.8-6.4-4-12.5-7.2-6-3.1-11.6-6.2-12.2-6.7-.7-.6-1.3-.7-1.3-.2 0 .5-.4.3-.9-.4-.4-.7-1.4-1.4-2.2-1.6-1.6-.3-9.6-3.9-15.1-6.8-2.1-1-3.8-1.6-3.8-1.2 0 .5-.5.3-1.2-.4s-1.8-1.2-2.4-1.2c-.7 0-2.5-.5-4.1-1.2-1.5-.6-3-1.2-3.3-1.3-.3 0-1.5-.6-2.6-1.3-1.2-.6-2.4-.9-2.6-.6-.3.3-2.3-.4-4.4-1.5-2.2-1.1-4.8-2.2-5.9-2.4-1.1-.2-2.7-.7-3.5-1-.8-.4-2.6-.8-4-.9-1.4-.2-2.7-.6-3-.9-.3-.4-2.1-.9-4-1.3-1.9-.3-5.5-1-8-1.6-10.3-2.4-26.8-5.1-31.2-5.1-3.3-.1-5.2-.7-6.4-2-1.7-1.9-1.8-11.3-1.7-186.3 0-101.4.4-185.3.7-186.4.5-1.5 1.3-1.9 2.9-1.6 1.2.3 2.9.7 3.7.8zM1230.7 853c.2 103.4-.1 188-.5 188.1-.4.1-2 .2-3.7.4-1.6.1-5.9.6-9.5 1-3.6.4-7.7.7-9.2.6-1.6-.1-2.8.2-2.8.7 0 .4-.8.8-1.7.8-1 .1-6.1 1.1-11.3 2.4-5.2 1.2-10.3 2.3-11.2 2.4-1 .1-2.1.5-2.4.9-.4.4-1.9.7-3.4.7s-3 .3-3.4.7c-.3.4-1.6.8-2.8 1-1.2.2-2.6.7-3.2 1.1-.6.5-3.1 1.5-5.6 2.2-2.5.8-5.6 2-6.9 2.7-1.4.6-2.8 1-3.3.7-.4-.3-.8-.1-.8.3 0 .5-2.4 1.7-5.2 2.7-5.5 1.9-9.9 3.8-20.5 8.7-3.4 1.6-6.5 2.9-6.9 2.9-.4 0-1.5.7-2.4 1.5-1 .9-2.7 1.7-3.9 2-1.2.2-2.8 1.1-3.7 2-.9.8-2 1.3-2.5 1-.5-.4-.9-.1-.9.4 0 .6-.7 1.1-1.5 1.1s-1.5.4-1.5 1c0 .5-.3.9-.7.8-.9-.1-4.6 1.3-5.3 2.1-.7.8-10.8 7.4-14.7 9.7-1.8 1-3.3 2.2-3.3 2.6 0 .4-.4.8-1 .8-.5 0-1.8.8-2.8 1.7-1.1 1-3.2 2.7-4.7 3.8-1.6 1.1-3.6 2.7-4.4 3.6-.9.8-3.5 3-5.9 4.8-5.7 4.4-19.2 17.8-22.1 21.8-1.2 1.8-2.7 3.3-3.2 3.3s-.8-16.1-.6-40.8c.3-34.9.6-43.5 1.7-45 .2-.1.4-.7.5-1.2.1-.6.3-1.1.4-1.3.2-.1.5-1.3.7-2.7.2-1.3 1-2.8 1.7-3.2.6-.4.8-.8.4-.8-.7 0 0-1.8 5.1-11.5.9-1.7 2.4-3.9 3.4-4.9 1-1.1 2.4-3.2 3-4.8.7-1.5 1.6-2.8 2-2.8.5 0 .7-.3.5-.8-.1-.4.9-1.9 2.1-3.2 1.3-1.4 3.7-4.3 5.2-6.5 1.6-2.2 4.5-5.4 6.4-7 2-1.7 5.5-4.9 7.9-7.3 2.4-2.3 4.8-4.2 5.2-4.2.5 0 1.5-.7 2.4-1.5 6.1-5.6 13.6-11.5 14.5-11.5.8 0 6.2-3.8 8.6-6 .9-.8 6.5-4 12.6-7 6-3 11.2-6 11.6-6.5.4-.6.8-.6.8-.1s.9.1 2-.9 2-1.5 2-1c0 .4 1.1 0 2.5-.9 1.3-.9 2.9-1.6 3.4-1.6.6 0 3.6-1.2 6.7-2.6 5.7-2.6 13.2-5.5 13.7-5.2.2.2 13.5-3.8 16.7-5 .8-.3 2.2-.7 3-.9 24.4-4.8 35-13.1 35-27.4 0-9.5-4.1-16.3-12.2-20.2-3.7-1.8-18-1.6-20.3.3-.7.6-1.7 1-2.1.9-.5-.1-1.2 0-1.6.1-.5.1-1.1.3-1.5.5-.5.1-1.5.4-2.3.8-.8.3-5.5 1.8-10.5 3.3-4.9 1.5-9.9 3.1-11 3.5-3.6 1.5-15.9 6-18 6.6-1.1.3-3.6 1.2-5.5 2-1.9.9-4.8 2.1-6.5 2.8-8.9 3.6-13.5 5.9-13.5 6.7 0 .5-.4.7-.9.3-.5-.3-1.7.2-2.5 1.1-.9.8-1.6 1.2-1.6.8 0-.4-.8 0-1.7.8-1 .8-3.1 2.2-4.8 3-9.3 4.5-33.3 19.4-36.6 22.7-.9.9-4 3.6-6.9 6.1-2.8 2.5-8.5 7.8-12.7 11.7-4.1 4-7.8 7.3-8.3 7.3-1 0-.4-14.8.8-18.8.6-1.7.9-3.2.6-3.2-.2 0 .2-1.3 1-2.9.9-1.6 1.2-3.1.9-3.5-.4-.3-.1-.6.5-.6.7 0 1.2-.8 1.3-1.8 0-.9.8-2.9 1.7-4.4.9-1.4 3-4.8 4.6-7.5 4.2-6.9 11.1-15.4 19.1-23.6 7.7-7.8 15.2-14.7 16.1-14.7.3 0 2.7-1.8 5.3-4 2.6-2.2 5.1-4 5.5-4 .4 0 1.6-.9 2.8-2 1.2-1.1 2.8-2 3.5-2 .7 0 1.3-.4 1.3-1 0-.5 1.7-1.7 3.7-2.5 2.1-.9 4.5-2.3 5.5-3.2 1-.9 1.8-1.3 1.8-1 0 .4.9-.2 2-1.3 1.2-1.2 2.5-1.8 3-1.5.6.4 1 .2 1-.2 0-.7 13.1-7.5 15-7.8.3-.1 2.3-1 4.5-2s5.4-2.4 7-3.1c1.7-.7 4.6-1.9 6.5-2.8 2-.8 4.7-1.7 6-2 2.6-.5 11-3.2 14.5-4.8 1.1-.4 4-1.2 6.5-1.7s5.6-1.2 7-1.6c1.4-.4 3.4-.8 4.5-1 4.7-.7 15.1-5 17.4-7.1 1.3-1.3 2.8-2.1 3.2-1.8.4.2 1-.4 1.4-1.5.3-1.1 1.2-2.2 2-2.5.8-.3 1.5-1.4 1.5-2.4s.5-2.3 1-2.8c.6-.6 1.1-3.5 1.2-6.5.1-4.3-.5-6.6-2.7-10.7-1.5-2.9-3.1-5.2-3.4-5.2-.3 0-1.9-1.1-3.5-2.5s-3.2-2.5-3.5-2.6c-.3 0-1.7-.3-3.1-.5-7.9-1.3-14.4-.7-19.3 1.8-1 .5-2.2.6-2.7.3s-1.1-.1-1.5.5c-.4.6-1 .8-1.5.5-.5-.3-1.1-.1-1.5.5-.3.5-1.7 1-3 1s-4.8.8-7.7 1.9c-2.9 1-8.7 2.9-12.8 4.1-4.1 1.3-8.1 2.8-8.7 3.3-.7.5-1.3.6-1.3.2 0-.4-.6-.2-1.4.4-.8.7-2.2 1.3-3.2 1.5-1.1.2-5.9 2.3-10.9 4.7-4.9 2.4-9.3 4.2-9.7 4.1-.5-.1-.8.3-.8 1 0 .6-.3.9-.6.6-.5-.6-14.6 6.3-17 8.3-.6.5-1.4.6-1.7.2-.4-.3-.7-.1-.7.5 0 .7-.4 1.2-1 1.2-.5 0-4.1 2-8 4.5-3.9 2.5-7.5 4.5-8 4.5-.6 0-1 .4-1 .8 0 .5-1.6 1.7-3.5 2.8-1.9 1-3.5 2.2-3.5 2.6 0 .5-.6.8-1.2.8-.7 0-2.7 1.4-4.5 3-1.8 1.7-3.5 3-3.9 3-.3 0-1.8 1.2-3.3 2.6-1.4 1.4-5.3 5.1-8.6 8.4-3.3 3.2-7.3 7.4-8.8 9.4-1.6 2-3.2 3.4-3.6 3.2-1.1-.7-.5-54.6.7-58.4.6-1.7.8-3.2.6-3.2-.3 0-.2-.6.3-1.3.8-1.2 1.2-2.8 1.5-6 .1-.9.6-1.7 1.1-1.7.5 0 .7-.6.4-1.4-.3-.7-.1-1.8.4-2.3.5-.5 1.2-2.3 1.5-3.9.2-1.6 2.1-6.2 4.1-10.3 2.1-4.1 3.8-7.9 3.9-8.6.1-.6 1.5-3.2 3-5.6 4.8-7.4 5.3-8.3 6-10.1.3-.9 1.2-1.9 2-2.2.8-.3 1.4-1.2 1.4-2.1 0-.8.4-1.5.8-1.5.5 0 1.5-1.2 2.3-2.8 2.5-4.8 32.2-35.2 34.5-35.2.3 0 1.9-1.4 3.7-3 1.8-1.7 4.1-3.3 5.2-3.6 1.1-.4 2.8-1.4 3.7-2.3 3.1-2.9 4.8-4.2 4.8-3.6 0 .4 1.4-.5 3.1-1.9 1.7-1.4 3.7-2.6 4.5-2.6.8 0 1.4-.5 1.4-1.2 0-.6.3-.8.6-.5.4.3 1.8-.3 3.2-1.3 1.3-1.1 3.1-2 3.8-2 .8 0 1.4-.5 1.4-1 0-.6.7-1 1.6-1 .8 0 3.1-1.1 5.1-2.5 2-1.3 4-2.2 4.5-1.9.4.3.8.1.8-.3 0-.8 6.7-3.7 8-3.5.3 0 1.3-.7 2.3-1.5.9-.9 1.7-1.3 1.7-.8 0 .4 1.1 0 2.5-.9s2.5-1.4 2.5-1.2c0 .3 1.2-.1 2.7-.9 1.5-.8 3-1.2 3.5-.9.4.3.8.1.8-.4s.7-.9 1.5-1c.8-.1 2.2-.3 3-.4.8-.1 1.5-.5 1.5-1 0-.4.9-.8 2-.8 1.2 0 3.2-.7 4.5-1.6 1.4-.9 2.5-1.3 2.5-.9s.7.2 1.5-.5 1.5-1 1.5-.6c0 .3 1.6 0 3.5-.8s3.5-1.3 3.5-1c0 .3.6.2 1.3-.3.6-.4 1.5-.8 2-.9.4-.1.8-.2 1-.4.6-.4 30.1-7.7 32.2-7.9.7-.1 1.1 63.3 1.2 187.9zM717.6 714.5c.8.2 1.1 44.7 1.2 159.4l.1 159.2-17.8-.1c-12.7-.1-17.8-.5-18-1.3-.1-.7-.3-72.2-.5-159l-.3-157.7 2.6-.6c1.4-.3 2.9-.6 3.3-.7 1.4-.3 28.3.4 29.4.8zm602.3 0c.3.4.6 72.1.7 159.5l.1 158.8-17.8.2c-13.5 0-17.9-.2-18.5-1.2-.9-1.4-1.2-315.4-.4-316.8.3-.5 3-1 6-1.2 8.1-.4 29.2.1 29.9.7zm-596.4 373.1c10.2 1.1 24.1 3.5 31.8 5.5 2.2.6 4.1.8 4.4.6.2-.3 1.9-.1 3.6.5 1.8.5 4.6 1.1 6.2 1.4 1.7.3 5.9 1.2 9.5 2.1 3.6.9 7.4 1.7 8.5 1.9 1.1.1 3.9.9 6.2 1.7 2.2.9 4.4 1.3 4.7 1 .3-.4.6-.1.6.5s.9.9 2 .7c1.1-.2 2.6.2 3.4 1 .7.8 1.5 1.2 1.8 1 .6-.6 18 5.3 19.2 6.5.6.6 2 1 3.3 1 1.3 0 2.3.5 2.3 1.2 0 .6.3.8.7.5.3-.4 1.2-.2 2 .4.7.6 1.3.8 1.3.5 0-.4 1-.1 2.3.6 1.2.7 2.4 1.2 2.7 1.3.9 0 9.5 3.9 10 4.5 1.1 1.2 5.1 3 6.5 3 .8 0 1.5.4 1.5 1 0 .5.5 1 1 1 .6 0 2.7 1.1 4.8 2.3 2 1.3 7 4.1 11 6.1 3.9 2.1 7.2 4.2 7.2 4.7s.3.8.8.7c1-.3 5.6 2.7 11.8 7.7 1.8 1.4 3.7 2.5 4.2 2.5.6 0 1.5.6 1.9 1.4.4.8 1.3 1.6 1.8 1.8 1.1.3 4.7 3.1 8.2 6.5 1.3 1.3 2.6 2.3 2.9 2.3.7 0 17.5 17 21.2 21.5 6.2 7.7 16.2 21.9 16.2 23.1 0 .7.4 1.4.8 1.6 1.2.5 5.2 7.4 5.7 9.9.2 1.2 1.1 2.9 1.8 3.8 1.4 1.6 5.4 12 6.2 16.1.2 1.1.6 2.4.9 2.9.6.9 1.8 9.1 2 13.1.1 2.4-.1 2.5-5.4 2.4-3-.1-7.5-.4-10-.8-2.5-.3-6.9-.8-9.8-1.1-3-.3-6.3-1-7.5-1.7-1.2-.6-2.3-1-2.5-.9-.1.2-2.1-.1-4.5-.5-2.3-.4-4.6-.7-5.1-.6-.4.2-1.4-.3-2.2-.9-.8-.6-1.4-.9-1.4-.6 0 .3-3-.3-6.7-1.3-3.8-1-7.9-2.2-9.3-2.5-1.4-.4-3.1-.9-3.8-1.1-.7-.2-1.4-.4-1.7-.4-.3 0-2.5-.9-4.9-2-2.4-1-4.7-1.6-5-1.3-.3.4-.6.1-.6-.6s-.4-1-.8-.7c-.5.3-2-.1-3.4-.8-1.4-.8-4.3-2-6.4-2.6-2.2-.7-5.9-2.4-8.3-3.7-2.4-1.2-5.2-2.3-6.2-2.3-1.1 0-1.9-.5-1.9-1 0-.6-.6-1-1.4-1-1.8 0-16.2-7.5-18.2-9.4-.8-.9-2.2-1.6-2.9-1.6-.7 0-2-.7-2.9-1.5-.8-.9-1.8-1.5-2.1-1.5-1.2.1-6.1-2.9-7.9-4.9-1.1-1.2-2.5-2.1-3.2-2.1-.7 0-1.9-.6-2.6-1.3-2-1.8-7.6-5.7-8.3-5.7-.4 0-1.2-.6-2-1.3-.7-.6-4.1-3.2-7.4-5.6-3.4-2.4-6.1-4.7-6.1-5.2s-.4-.9-1-.9c-.9 0-4.2-2.8-13.2-11.3-2.2-2-4.2-3.7-4.5-3.7-.8 0-11.2-11.4-11.3-12.3 0-.4-.7-.7-1.5-.7s-1.5-.4-1.5-.8c0-.5-1.9-2.9-4.2-5.3-2.4-2.5-5.6-6.3-7.3-8.4-1.6-2.2-4-4.9-5.2-6.2-1.2-1.3-2-2.3-1.8-2.3.5 0-2-3.1-7.2-8.9-1.8-2-3.3-4.1-3.3-4.8 0-.6-.4-1.3-.8-1.5-1.2-.4-7.2-9.5-7.2-10.7 0-.6-.5-1.1-1.2-1.1-.6 0-.9-.3-.5-.6.3-.3-.8-2.7-2.4-5.2-1.6-2.5-2.9-5.1-2.9-5.8 0-.7-.4-1.4-.8-1.6-1.3-.5-5.3-8.9-4.7-9.9.4-.5 1.8-.7 3.3-.3 1.5.3 4.5.8 6.7 1zm564.6.7c-1.9 4.9-11.6 22.3-13.8 24.5-.6.6-1.5 2.1-1.8 3.2-.3 1.1-1.1 2-1.6 2s-.9.7-.9 1.5-.4 1.5-.8 1.5c-.5 0-1.5 1.2-2.3 2.7-.8 1.6-1.6 3-1.9 3.3-.3.3-1.7 2.3-3.2 4.5-1.5 2.2-4.8 6.2-7.3 9-2.4 2.7-4.5 5.4-4.5 5.9s-3 4-6.7 7.8c-17.9 18.3-24 24.5-26.4 26.3-1.4 1.1-4.7 3.9-7.5 6.2-11.4 9.7-17.2 14.2-17.8 13.6-.3-.4-.6-.1-.6.6 0 .6-1 1.5-2.3 2-1.3.5-3.6 2-5.3 3.3-5 4.1-11.7 8.1-21.4 12.9-2.5 1.2-5.7 3-7.2 4-1.4 1.1-3.3 1.9-4.2 1.9-.9 0-1.6.4-1.6 1 0 .5-.5 1-1.2 1-.6 0-5.8 2.3-11.5 5-5.7 2.8-12.4 5.6-14.9 6.2-2.4.7-4.4 1.6-4.4 2.1s-.6.7-1.3.4c-.7-.3-2.1.1-3.2.9-1 .8-3 1.4-4.4 1.4-1.4 0-3.8.6-5.2 1.4-1.4.7-5 1.9-8 2.5-3 .7-6.3 1.6-7.4 2.1-2.2.8-16.8 4.2-20 4.6-1.1.1-6.7 1-12.5 1.9-5.8 1-13.1 1.9-16.4 2l-5.8.4.6-5.3c.3-2.9 1-6.5 1.5-7.9.6-1.5.7-2.7.3-2.7-.4 0-.2-.4.3-.8.6-.4 1.6-2.9 2.3-5.7.7-2.7 1.8-5.2 2.3-5.6.6-.3 1-.9 1-1.3-.1-1.5 4.6-12.4 5.9-13.6.3-.3 1.3-1.9 2.1-3.5 2.5-5 10.2-16.5 11.1-16.5.4 0 .8-.7.8-1.5s2-3.5 4.5-5.9c2.5-2.5 4.5-4.8 4.5-5.2 0-.3 1.8-2.3 4.1-4.5 2.2-2.1 3.7-3.9 3.3-3.9-.4 0 .9-1.4 3-3.1 2-1.8 5.9-5.4 8.7-8 2.7-2.7 5.4-4.9 5.9-4.9.6 0 1-.4 1-1 0-.5 1.6-1.7 3.5-2.6 1.9-.9 3.3-2 3-2.4-.3-.4.9-1.3 2.5-2 1.7-.7 3-1.6 3-2 0-.8 3.5-3.1 12-7.8 2.5-1.3 5.2-3.1 6.1-3.8.8-.8 1.9-1.4 2.3-1.4.4 0 2.7-1.3 5-3 2.4-1.6 4.6-2.6 5-2.3.3.4.6.2.6-.4 0-1 4.1-2.9 6.4-3.1.5 0 1.2-.5 1.6-1.2.4-.6 1.3-1.3 2.1-1.5 3.7-.8 5.9-1.8 5.9-2.5 0-.5 1.3-1.1 3-1.5 1.6-.4 3.2-1.1 3.5-1.6.4-.5 1.2-.9 2-.9.7 0 4.3-1.4 7.8-3 3.6-1.7 7.2-3 8.1-3 .9 0 1.6-.5 1.6-1.1 0-.6.6-.9 1.3-.6.7.3 3.7-.6 6.5-1.9 2.9-1.3 5.6-2.3 6-2.2.4.1 1.7-.3 2.8-1 1.2-.6 2.4-.9 2.7-.6.3.3 1.8-.1 3.4-.8 1.5-.8 3.6-1.3 4.6-1.1.9.3 1.7 0 1.7-.5s.6-.9 1.3-1c4.4-.5 8.1-1.3 9.8-2.3 1.1-.6 2.3-.8 2.6-.5.3.3 1.3.1 2.2-.3 1.6-.9 13.7-3.6 20.8-4.7 2.1-.3 5.4-.9 7.3-1.4 1.9-.5 6.4-1.1 10-1.5 11.6-1.2 19.1-2.3 19.6-2.7.1-.2 1.4-.4 2.8-.6 2.3-.1 2.4.1 1.7 2.1z" />
  </Svg>
)
export default Books