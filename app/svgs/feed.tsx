import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { useRouter } from "expo-router"



const Feed = (props: SvgProps) => (
  <Svg 
     fill={"#7f5539"}
    width={80}
    height={100}
    viewBox="0 0 2000 2000"
    {...props}
  >
    <Path d="M992 488c-1.5 1.9-3.8 2-112.5 2.1-73.3.1-111.4.5-112.2 1.1-.9.7-1.8.6-3-.3-1.3-1.1-1.7-1.1-2-.2-.3.7-2 1.3-3.9 1.3-2.2 0-3.7.6-4 1.5-.4.8-1.6 1.5-2.9 1.5-1.3 0-2.5.7-2.9 1.5-.3.8-1.4 1.5-2.3 1.5-2.3 0-16.3 14-16.3 16.3 0 .9-.4 1.7-1 1.7-.5 0-1 .8-1 1.9 0 1-.7 2.4-1.5 3.1-.8.7-1.5 2.3-1.5 3.5 0 1.3-.6 2.5-1.3 2.8-.8.3-1.2 2.5-1 7 .2 4.9-.2 7-1.3 8.2-1.4 1.3-1.4 1.7 0 3.1 1 1 1.4 2.4 1 4-.4 1.7-.1 2.6 1 3 .9.3 1.6 1.6 1.6 2.9 0 1.3.7 2.5 1.5 2.9.8.3 1.5 1.4 1.5 2.5s.5 2.3 1 2.6c.6.3 1 1.3 1 2.1 0 2.1 6 8.4 8 8.4.8.1 4 2.5 7 5.5 3.8 3.8 6.3 5.5 8.1 5.5 1.4 0 3 .5 3.7 1.2.8.8 1.5.8 2.5 0 .9-.7 1.7-.8 2.3-.2.6.6 34 1 88.7 1 81.3.1 87.7.2 88.7 1.8.9 1.6 1.1 1.6 2-.1 1.3-2.1 4.9-2.3 5.6-.2.9 2.3 14.2 2.1 16-.3 1.3-1.6 1.5-1.6 2.8 0 1.6 2.2 4.2 2.3 5 .3.3-.8 1.4-1.5 2.4-1.5 1.1 0 2.5.7 3.2 1.5.7.8 1.8 1.5 2.5 1.5s1.8-.7 2.5-1.5 2.1-1.5 3.2-1.5c1 0 2.1.7 2.4 1.5.4.9 1.9 1.5 3.9 1.5s3.5-.6 3.9-1.5c.3-.8 1.4-1.5 2.4-1.5 1.1 0 2.5.7 3.2 1.5 1.6 1.9 2.9 1.9 5.2-.2 1.7-1.5 1.9-1.5 3.2.3 1.4 1.8 1.5 1.8 2.1.1.9-2.1 3.8-2.2 5.6-.1 1.2 1.4 1.4 1.4 2.7-.3 1.3-1.7 1.4-1.7 2.8.2s1.6 1.9 2.5.2c.7-1.2 2.3-1.7 5.4-1.7 3.1 0 4.7.5 5.4 1.7.9 1.7 1.1 1.7 2.5-.2s1.5-1.9 2.8-.2c1.3 1.7 1.5 1.7 2.7.3 1.2-1.4 6.9-1.6 51.3-1.6 43.4 0 49.9.2 50.4 1.5.8 2 3.4 1.9 5-.3 1.3-1.6 1.5-1.6 2.8 0 1.7 2.3 8.8 2.4 10.7.2 1.2-1.4 1.4-1.4 2.6.2 1.2 1.7 1.4 1.7 2.7-.2 1.4-1.8 1.5-1.8 2.8-.1 1.3 1.7 1.5 1.7 2.7.3 1.8-2.2 6.7-2.1 8 .1.9 1.7 1.1 1.7 2.5-.2s1.5-1.9 2.8-.2c1.3 1.7 1.5 1.7 2.7.3 1.7-2 5-2.1 5.7-.1.4 1 2 1.5 4.9 1.5 2.6 0 4.7-.6 5.5-1.5.7-.8 2.1-1.5 3.2-1.5 1 0 2.1.7 2.4 1.5.8 1.9 4 1.9 4.8 0 .4-1.3 9.1-1.4 65.6-1.4 58.5.1 65.1.3 65.9 1.7.8 1.4 1.1 1.4 2.5.2 1.3-1 2-1 2.8-.2.7.7 2.7 1.2 4.5 1.2 2.1 0 3.6.6 3.9 1.5.4.8 1.4 1.5 2.4 1.5 1.1 0 2.2.4 2.5 1 .3.5 1.9 1 3.4 1 2.1 0 4.4 1.5 8.6 5.5 3.1 3 6.2 5.5 6.8 5.5 2 .1 5.7 3.7 5.7 5.5 0 1 1.8 3.5 4 5.6 2.2 2.2 4 4.8 4 5.8s.7 2.1 1.5 2.5c.8.3 1.5 1.3 1.5 2.1 0 .9.7 2.4 1.6 3.3 1.2 1.1 1.5 2.7 1.1 5.4-.4 2.8-.1 4.1.9 4.5.8.3 1.4 1.5 1.4 2.8 0 1.2.7 2.8 1.5 3.5 1.4 1.2 1.4 1.5 0 3-1.9 2.1-1.9 3.6 0 4.4 1.3.5 1.5 15.1 1.5 123.6s-.2 123.1-1.5 123.6c-.8.4-1.5 1.8-1.5 3.4 0 1.6.7 3 1.5 3.4.8.3 1.5 1.2 1.5 2 0 .7-.7 1.6-1.5 2-1.2.4-1.5 2.5-1.5 9.5 0 6.9-.3 9-1.5 9.5-.8.3-1.2 1.1-.9 1.9.3.8-.2 2-1.1 2.7-.8.7-1.5 2.1-1.5 3.2 0 1-.7 2.1-1.5 2.4-.9.4-1.5 1.9-1.5 3.7 0 2.4-1.2 4.3-5.2 8.4-2.9 3-5.3 6.1-5.3 7.1s-.9 1.8-2.3 2c-1.3.2-2.7 1.4-3.2 2.7-.6 1.7-2 2.6-4.5 3.1-1.9.3-4.3 1.6-5.3 2.8-2.2 2.7-7.4 5.6-10.1 5.6-1.2 0-2.1.4-2.1 1s-3.1 1-7.3 1c-4 0-7.8.5-8.4 1.1-.8.8-1.7.8-3.1 0-3.2-1.7-14.7-1.4-16.2.4-1.6 1.9-3.4 1.9-5 0-1-1.2-1.6-1.3-2.7-.4-1 .9-1.7.9-2.5.1-1.7-1.7-6-1.5-8.6.3-1.9 1.4-2.4 1.4-4.7-.1-2.2-1.4-2.9-1.5-5.1-.4-1.9 1.1-2.7 1.1-3.6.2-1.4-1.4-5.7-1.5-7.8-.2-.9.5-1.9.5-2.6-.1-.8-.6-6.3-.8-14.1-.6-7 .3-13.2.5-13.8.4-.5 0-138.2-.2-305.9-.4-232.1-.2-305.2-.6-305.7-1.5-.6-.9-1.2-.8-2.4.2s-1.9 1-2.7.2c-.7-.7-2.2-1.2-3.5-1.2-2.3 0-9.9-3.5-10.9-5.1-.3-.5-1.2-.9-2.1-.9-.9 0-2.6-1.1-3.9-2.5-1.3-1.4-3-2.5-3.8-2.5-1.9 0-19.6-17.8-19.6-19.7 0-.8-1.1-2.6-2.5-4.1-1.4-1.5-2.5-3.5-2.5-4.4 0-1-.4-1.8-1-1.8-1.4 0-1.2-2.7.3-3.4.8-.3.7-.8-.6-1.6-1.5-.9-1.8-2.3-1.6-6.6.2-3.2-.2-5.9-.9-6.6-1.6-1.6-1.5-3.5.1-4.2 1-.5 1-.7 0-1.2-1.6-.7-1.7-10.6-.2-12.1 1.6-1.6 1.7-11.4.2-12-1.7-.7-1.7-3 0-3.6.9-.3.9-.7 0-1.8-.9-1.2-1.3-19-1.3-74.1-.2-61.5-.4-72.7-1.6-73.2-.8-.3-1.4-1.9-1.4-3.9 0-1.9-.7-4-1.5-4.7-.8-.7-1.5-2.1-1.5-3.1s-.4-2.1-1-2.4c-.5-.3-1-2-1-3.6 0-2.2-.6-3.2-2.5-3.9-1.4-.5-2.5-1.5-2.5-2.2-.1-1.8-9.4-10.8-11.2-10.8-.9 0-2.1-.7-2.8-1.5-.7-.8-2.1-1.5-3.1-1.5-1.1 0-1.9-.5-1.9-1 0-.6-2.3-1-5-1-3.6 0-5.2-.4-5.7-1.5-.5-1.4-.7-1.4-2.3 0-1.7 1.5-1.9 1.5-2.9-.2s-1.2-1.7-2.1-.1c-.9 1.5-2.5 1.8-8.3 1.8-6.5 0-7.3.2-8.2 2.2-.6 1.4-2.1 2.4-3.8 2.6-3.7.4-16.7 13.3-16.7 16.6 0 1.3-1.3 3.9-3 5.7-2 2.4-2.9 4.3-2.8 6.3.2 1.6-.3 3.1-1 3.4-1.5.5-1.6 4.4-.1 5.9.8.8.8 1.7 0 3.1-1.7 3.2-1.6 211.3.1 212.3 1 .7 1 1.3.2 2.7-.9 1.4-.9 2.2.1 3.5.7 1 1 2.7.7 3.9-.3 1.3.1 2.4 1.2 3 1 .5 1.6 2.2 1.6 4.2 0 2.1.6 3.6 1.5 4 .9.3 1.5 1.8 1.5 3.9 0 1.9.6 4 1.4 4.7.8.6 1.2 1.8.9 2.6-.3.7.2 1.7 1.1 2 .9.3 1.6 1.6 1.6 2.9 0 1.3.7 2.5 1.5 2.9.8.3 1.5 1.4 1.5 2.4 0 1.1.6 2.5 1.4 3.2.8.6 1.2 1.8.9 2.6-.3.7.2 1.7 1.1 2 .9.3 1.6 1.5 1.6 2.5 0 1.1 2.5 4.3 5.5 7.3 3 2.9 5.5 6 5.5 6.8 0 .8 1.1 2 2.5 2.6 1.4.6 2.5 1.7 2.5 2.4 0 1.8 11.1 12.8 12.9 12.8.8 0 3.9 2.5 6.8 5.5s6 5.5 6.9 5.5c.8 0 2.5 1.1 3.8 2.5 1.3 1.4 3.4 2.5 4.9 2.5 1.6 0 3.9 1.2 5.7 3 2.5 2.4 3.9 3 7.6 3 3.1 0 4.6.5 5.1 1.6.4 1.1 1.3 1.3 3.5.9 1.9-.5 3.7-.1 5.3.9 1.3.9 4.2 1.6 6.3 1.6 2.3 0 4.5.6 5.2 1.5.8.9 3 1.5 6 1.5 3.3 0 5 .5 5.4 1.5.3.8 1.2 1.5 2.1 1.5.9 0 1.8-.7 2.1-1.5.8-1.9 3.3-1.9 4 0 .8 2 2.3 1.9 4.7-.2 1.7-1.6 1.9-1.6 2.8-.1.8 1.4 26 1.6 308.9 1.5h308.1l2.7 2.7c1.6 1.4 3.3 2.6 3.9 2.6.8 0 .9 2.5.6 7.9-.4 5.3-.2 8 .6 8.5 1.5 1 1.4 5.3-.1 5.9-1 .3-1 .8.1 2.1s1.1 2 .3 2.8c-.8.8-1.2 5.5-1.2 13.5 0 10.1.3 12.5 1.5 12.9.8.4 1.5 1.5 1.5 2.6s.7 2.7 1.6 3.5c.9 1 1.3 2.5 1 3.9-.5 1.7-.1 2.6 1.5 3.4 1.2.7 1.8 1.7 1.5 2.6-.7 1.8 10.3 13.4 12.6 13.4.8 0 2.5 1.1 3.8 2.5 1.6 1.7 3.4 2.5 5.7 2.5 2.1 0 3.6.6 3.9 1.5.4.8 1.4 1.5 2.3 1.5.9 0 2.2.5 2.9 1.2.8.8 1.5.8 2.5-.1 1.1-.9 1.7-.8 2.7.4.8 1 1.7 1.2 2.4.6 1.9-1.5 7.6-2.4 7.6-1.2 0 .6.7 1.1 1.5 1.1s1.5-.5 1.5-1c0-.6 1.1-1 2.5-1s2.5-.4 2.5-.9c0-1 7.4-5.1 9.1-5.1.5 0 2.9-1.8 5.1-4 2.3-2.2 4.8-4 5.5-4 .8 0 4.2-2.9 7.7-6.5s7-6.5 7.8-6.5c1.9 0 4.8-3.2 4.8-5.1 0-1.5 5.1-5.9 6.8-5.9.5 0 1.4-1.1 2-2.5.6-1.3 2.8-3.5 4.9-4.9 5.4-3.5 101-99.7 101.4-102.1.2-1.1 1.5-2.2 2.9-2.5 1.4-.3 2.5-1.3 2.5-2.2 0-.9 1.2-2.7 2.8-4.2 1.5-1.4 2.7-3.4 2.7-4.4 0-1.1.7-2.2 1.5-2.6.8-.3 1.5-1.2 1.5-2.1 0-.9 1.7-3.4 3.7-5.6 2.5-2.7 3.7-4.8 3.5-6.4-.2-1.2.4-2.9 1.2-3.8.9-.9 1.6-2.2 1.6-3 0-.8.7-2 1.5-2.7.8-.7 1.5-2.1 1.5-3.2 0-1 .6-2.1 1.4-2.4.8-.3 1.4-1.8 1.4-3.4-.1-3.3 2.8-10 4.4-10 .7 0 .9-1.3.5-3.5-.5-2.8-.2-3.7 1.3-4.5 1.8-1 1.9-4.9 1.9-127.2 0-102.3.2-126.3 1.3-127 1-.7.9-1.1-.4-1.9-2.2-1.2-2.4-6.2-.3-7.9 1.4-1.2 1.4-1.5 0-3-2-2.2-2-9.9 0-10.6 1.8-.7 2.1-10 .4-10.6-1.9-.6-2-6.5-.2-8.3 1.4-1.4 1.4-1.8.2-2.6-1.1-.7-1.2-1.2-.1-2.9 1.4-2.4 1.6-7 .2-7-.5 0-1-.9-1-2s.5-2 1-2c1.6 0 1.2-6-.5-7.7-1.3-1.2-1.4-3.4-.9-13.4.6-10.5.5-11.9-1-12.5-.9-.3-1.6-1.6-1.6-2.8 0-1.1-.7-3-1.5-4-.8-1.1-1.5-4.1-1.5-6.7 0-3.4-.4-4.9-1.6-5.3-1-.4-1.4-1.4-1.1-2.6.3-1-.1-2.4-.9-3.1-.8-.6-1.4-2.3-1.4-3.6 0-1.5-1.3-3.7-3.1-5.4-2.4-2.2-3-3.5-2.6-5.5.3-2-.5-3.5-4-7-2.4-2.5-4.1-4.8-3.9-5.3.3-.4-.8-2.1-2.4-3.6-1.7-1.6-3-3.6-3-4.6 0-.9-.9-1.9-2-2.2-1.1-.3-2.3-1.3-2.7-2.4-1-2.6-19.9-21.3-21.5-21.3-.8 0-3.2-1.8-5.3-4-2.1-2.2-4.7-4-5.7-4s-2.1-.7-2.4-1.5c-.4-.8-1.4-1.5-2.3-1.5-1 0-2.8-1.1-4.1-2.5-1.3-1.4-3.2-2.5-4.3-2.5-2.3 0-8.7-3.7-8.7-5.1 0-.5-1.5-.9-3.4-.9s-3.8-.5-4.1-1c-.3-.6-1.5-1-2.5-1s-2.4-.8-3-1.8c-.8-1.2-1.3-1.3-1.6-.5-.8 1.9-2.5 1.6-5.1-.8-1.7-1.7-2.5-1.9-3.6-1-1.1.9-1.7.8-2.7-.4-1-1.2-3-1.5-8.3-1.4-4.4.1-7.2-.2-7.6-1-.4-.6-1.6-1.1-2.7-1-1 .1-70.6.1-154.6.1-151.7-.2-152.7-.2-153.3-2.2-.3-1.1-1.5-2-2.5-2-.9 0-2 .9-2.3 2-.3 1.1-1 2-1.7 2s-1.4-.9-1.7-2c-.4-1.6-1.4-2-4.8-2s-4.4.4-4.8 2c-.3 1.1-1 2-1.7 2s-1.4-.9-1.7-2c-.4-1.5-1.4-2-3.8-2s-3.4.5-3.8 2c-.3 1.2-1.4 2-2.6 2-1.1 0-2.6-.9-3.3-2-1-1.5-2.4-2-5.4-2-3.3 0-4.3.4-4.7 2-.3 1.1-1 2-1.7 2s-1.4-.9-1.7-2c-.4-1.5-1.4-2-3.8-2s-3.4.5-3.8 2c-.3 1.1-1 2-1.6 2-.6 0-1.1-.9-1.1-2s-.4-2-.9-2-1.1.9-1.4 2c-.3 1.1-1 2-1.7 2s-1.4-.9-1.7-2c-.7-2.8-8.1-2.8-10.3 0z" />
    <Path d="M727.4 726.4c-.3.8-2 2.2-3.7 3.1-1.8.8-3.9 2-4.7 2.5-.8.5-2.3 1.1-3.2 1.4-1 .3-1.8 1.5-1.8 2.6s-.4 2-1 2c-.5 0-1 .8-1 1.9 0 1-.7 2.4-1.5 3.1-1.9 1.6-2.1 14.1-.3 17 1 1.6 1 2.4 0 4-1.4 2.4-1.6 7.6-.2 8.5 1.4.9 1.2 6.1-.2 8.5-1 1.6-1 2.4 0 4 .9 1.6 1 2.4 0 3.9-1 1.6-.9 2.5.2 4.7 1.2 2.1 1.2 2.8.3 3.1-.8.3-1.3 2.3-1.3 5.3s.5 5 1.3 5.3c.9.3.9.9 0 2.5-.8 1.3-.9 2.3-.3 2.7 1.4.9 1.2 6.9-.2 8.3-.9.9-.9 1.5 0 2.4 1.6 1.6 1.6 15 0 16.7-1 1.1-1 1.4 0 1.8.6.3 1.2 1.1 1.2 1.8s-.6 1.5-1.2 1.8c-1 .3-1 .8.1 2.1s1.1 2 .3 2.8c-1.6 1.6-1.5 4.5.1 5.1 1 .3 1 .9 0 2.6-2.6 4.3-1.6 6.9 5.7 14.1 7.5 7.5 9.8 8.4 16.9 5.9 2.4-.8 3.5-.8 4.6.1 1.3 1.1 2.5.2 7.5-4.9 4-4.2 6-7 6-8.7 0-1.3.6-3.3 1.2-4.4 1-1.6 1-2.4-.1-4.2-1-1.6-1-2.3-.2-2.6 1.3-.4 1.5-4.4.2-5.7-.5-.6-1.1-3.6-1.4-6.8-.2-3.2-1-6.4-1.6-7-1.8-1.8-1.3-4 1.5-6.4 2.6-2.2 3.1-2.3 25-2.1 17.5.1 22.6-.1 23.9-1.2 3.4-2.9 4.5-6.7 4.5-16.5 0-9.7-.5-11.5-5-16.7-1.7-2.1-6.3-2.4-7.8-.6-1.3 1.6-11.8 1.6-13.4 0-1.6-1.6-11.1-1.5-12.6 0-1 1-1.7 1-3.1.1-1.5-1-2.2-.9-3.2.3-1 1.3-1.4 1.3-2.8 0-.9-.9-3-1.4-4.6-1.3-2.5.2-3-.2-3.6-3.3-.4-1.9-.5-6.9-.2-11 .6-6.6 1-7.7 3.7-10.2 3.1-2.8 5.6-3.6 5.6-1.8 0 1.4 14.3 1.3 15.8-.2.8-.8 1.5-.8 2.8.3 1.3 1.1 1.8 1.1 2.1.1.5-1.4 3.3-1.6 3.3-.2 0 1.4 14.3 1.3 15.8-.2.8-.8 1.5-.8 2.6.1 1.3 1.1 1.8 1 3.1-.3 1.5-1.4 7.3-2.2 12.8-1.8 2.6.3 5-2.4 4.2-4.7-.4-1.4 0-2.1 1.4-2.6 1.7-.5 1.9-.9.8-2.6-.9-1.5-.9-2.3.1-4 1.1-1.7 1.1-2.5-.2-4.4-.9-1.4-1.6-3.1-1.6-4 0-.8-1.9-3.5-4.2-6l-4.3-4.5h-7.1c-5.9 0-7.3-.3-7.9-1.8-.6-1.6-.7-1.6-1.9 0-1.7 2.3-5.2 2.3-6 .2-.6-1.6-.8-1.6-2.4 0-2.6 2.2-9.8 2.2-11.2-.2-1-1.6-1-1.6-2 0-1.4 2.4-7.5 2.4-8.4.2-.6-1.6-.8-1.6-2.4 0-2.6 2.2-9.8 2.2-11.2-.2-1-1.6-1-1.6-2 0-1.4 2.3-7.5 2.4-8.8.2-.8-1.4-1-1.4-2.1 0-1.7 2-5 2.1-5.7.1-.8-1.9-4.3-2-5-.1zM871.6 726.5c-.4 1.1-2.2 1.5-7.5 1.5-6.9 0-7.1.1-11.5 4.3-2.6 2.4-4.6 5-4.6 5.9 0 .9-.5 2-1.1 2.4-.6.3-.8 1.6-.5 2.9.3 1.2.3 2.4.1 2.7-.3.3-.5 27.2-.5 59.8v59.2l2.5 2.2c1.4 1.2 2.5 3.2 2.5 4.4 0 1.9.4 2.1 2.4 1.6 1.4-.3 2.9 0 3.9 1 .8.9 2.8 1.6 4.3 1.6s3.5.7 4.4 1.5c1.5 1.4 1.8 1.4 3 0 1.6-1.9 6.4-1.9 8 0 .7.8 2 1.5 3 1.5s2-.7 2.4-1.5c.3-.9 1.8-1.5 3.4-1.5 1.6 0 3.5.7 4.2 1.5 1.7 2 4 1.9 5.6-.3 1.2-1.6 1.4-1.6 2.8.3 1.5 1.9 1.7 1.9 2.7.2.7-1.2 2.3-1.7 5.4-1.7 3.1 0 4.7.5 5.5 1.7.9 1.7 1.1 1.7 2.1 0s1.2-1.7 2.8-.2c1.6 1.4 1.9 1.4 3.1 0 1.6-1.9 3.4-1.9 5 0 1.6 2 4.6 1.9 5.4-.1.6-1.6.8-1.6 2.4 0 2.6 2.3 3.6 2.1 7.9-2 2.1-2 4.8-4 6-4.5 1.5-.5 2.1-1.4 1.7-2.4-.4-.8.1-1.7 1-2.1 2.7-1 2-8.2-1.4-15.2-1.7-3.6-3.6-6.2-4.5-6.2-.9 0-2-1.1-2.5-2.5-1-2.8-2.1-3-5.2-1.4-1.4.8-2.3.8-3.1 0-1.4-1.4-9.4-1.4-10.2-.1-.4.7-1.3.6-2.6-.1-1.4-.7-2.4-.7-3.3 0-.9.7-1.6.7-2.3 0-.8-.8-1.7-.7-3.1.2-1.7 1.1-2.5 1.1-4.6-.1-2-1-3.1-1.1-5.1-.2-3.3 1.5-10.2 1.6-11.1.1-.3-.6-1.7-.8-3-.5-1.9.5-2.5.2-3-1.9-.3-1.4-.3-3.2 0-4 .3-.9-.1-1.8-.9-2.1-2-.8-1.9-3.9.1-6.9 1.2-1.8 2.5-2.5 4.9-2.5 1.8 0 3.8-.6 4.5-1.4 1.3-1.6 6.6-1.4 8.3.3 1.5 1.5 17 1.4 18.5-.1.8-.8 1.5-.8 2.6.1 1.2 1 2 1 3.8-.3 1.2-.9 3.6-1.6 5.3-1.6 2.2 0 4-1 6.3-3.4 3.7-4 3.7-4 1.6-6.1-1.3-1.2-1.4-1.9-.4-3 1-1.2 1-1.8-.1-3.1s-1-1.7.4-2.5c2.6-1.5 2.1-2.6-3.3-7.9l-4.9-4.8H910c-20.1 0-21.3-.1-23.6-2.1-1.3-1.1-2.4-3-2.4-4.1 0-1.1-.4-2-1-2-1.4 0-1.2-7.4.3-8.9 1-1.1 1-1.4 0-1.8-1.9-.7-1.6-3.3.4-3.3.9 0 2.5-.7 3.4-1.6 2.6-2.3 25.3-2.3 27.9.1 2.1 1.9 3.9 1.9 4.6 0 .7-1.8 6.5-2 8.2-.3.9.9 1.5.9 2.4 0 .9-.9 1.6-.8 3 .4 1.6 1.5 1.8 1.5 2.4 0 .3-.9 1.4-1.6 2.4-1.6s2.3-.7 3-1.5c.7-.8 1.9-1.5 2.7-1.5 1.9 0 7.3-5.4 7.3-7.3 0-.8.7-2 1.5-2.7 1.9-1.6 1.9-3.9 0-6.4-.8-1.1-1.5-3-1.5-4.3 0-1.3-.4-2.3-1-2.3-.5 0-1-.8-1-1.8 0-2.3-6-8.2-8.3-8.2-1 0-2-.7-2.3-1.5-.7-1.7-4-2-4.9-.5-.8 1.3-5.2 1.3-6 0-.5-.8-1.1-.7-2.1.1-1.1.9-1.8.8-3-.2-1.3-1.1-1.7-1-2.6.5-.9 1.6-1.1 1.7-2.9 0-1.7-1.5-1.9-1.5-2.5 0-.9 2.4-14.9 2.3-16.4-.2-.9-1.6-1.1-1.6-2.1.1-1 1.7-1.2 1.7-2.9.2s-1.9-1.5-2.9.2c-1.1 1.7-1.1 1.7-2.2 0-1-1.7-1.2-1.7-2.9-.2s-1.9 1.5-2.9-.2-1.2-1.7-2.1-.1c-1.3 2.2-4.9 2.4-5.6.3-.4-.8-1-1.5-1.4-1.5-.4 0-1 .7-1.4 1.5zM995 726.5c-.7.8-2 1.5-3 1.5s-2 .9-2.3 2c-.3 1.1-1.3 2.3-2.4 2.7-1 .3-2.6 1.4-3.5 2.4-1.7 1.7-1.8 6.1-1.7 64.6 0 60.1.1 62.9 2 65.8 1.9 3.1 2.5 4.3 3.4 7 .2.8 1.3 1.5 2.4 1.5 1.1 0 2.3.4 2.6 1 .3.5 4.4 1 9 1 6.9 0 8.6.3 9.5 1.7 1 1.7 1 1.7 2 0 1.4-2.2 9.2-2.4 11-.2 1.2 1.4 1.5 1.4 3 0 2.1-1.9 3.4-1.9 5 0 .7.8 2 1.5 3 1.5s2-.7 2.4-1.5c.4-1.1 2.1-1.5 6.4-1.5 4.1 0 6.4.5 7.2 1.5.7.8 1.8 1.5 2.5 1.5s1.8-.7 2.5-1.5c1-1.1 3.6-1.5 11.1-1.5 6.8 0 9.9-.4 9.9-1.2 0-.6 1.1-2.6 2.5-4.4 1.4-1.8 2.5-3.9 2.5-4.8 0-.8.8-1.9 1.8-2.5 1.6-.9 1.6-1.1-.2-2.4-1.9-1.4-1.9-1.4 0-2.6 1.8-1 1.8-1.2.2-2.1-1-.6-1.8-1.8-1.8-2.6 0-.9-.7-2.2-1.5-3.1-.8-.8-1.2-1.9-.9-2.5 1-1.6-3.3-4.8-6.5-4.8-1.6 0-3.1-.6-3.5-1.5-.7-1.9-11.6-2.1-13.4-.3-.9.9-1.5.9-2.4 0-1.8-1.8-12.3-1.5-13.8.3-1.6 1.9-3.4 1.9-5 0-.9-1.1-1.6-1.2-3.2-.2-1.6.9-2.2.9-2.5-.1-.3-.7-2.3-1.2-5.3-1.2-4.1 0-5.2-.4-6.9-2.6-3.3-4.2-2.7-8.7 1.5-13.4 3.2-3.5 4.2-4 7.9-4 2.6 0 4.7.6 5.5 1.5 1.2 1.4 1.5 1.4 3 0 2.5-2.3 16.8-2.1 18.6.2 1.3 1.7 1.5 1.7 2.5 0 .5-.9 2-1.7 3.2-1.7 2.6 0 5.7-2.4 8-6.2 1.2-2 1.7-5 1.7-10.8 0-7.8-.1-8.2-3.1-11l-3.1-2.8-18.7.3c-21.9.4-24.6 0-26.9-3.8-1.4-2.3-1.5-3-.3-4.9 1-1.6 1-2.3.2-2.6-1.5-.5-1.4-2.9.2-3.5.9-.3.9-.7-.1-2-2.5-3 1.4-7.2 5.7-6 1.2.3 2.8 0 3.6-.7 1.2-1 1.9-1 2.7-.2.7.7 1.7.8 2.8.2.9-.5 2.2-.5 3.1.1 2.1 1.3 6.1 1 8.3-.6 1.7-1.3 2.3-1.3 4.4.1 2 1.3 2.9 1.4 5 .5 1.7-.8 2.8-.9 3.6-.1 1.6 1.6 9.3 1.3 10-.5.3-.9 1.8-1.5 4-1.5 2.1 0 3.6-.6 4-1.5.3-.8 1.7-1.5 3.1-1.5 1.6 0 2.5-.6 2.5-1.6 0-.8 1.1-3 2.5-4.8 2-2.7 2.5-4.4 2.5-9.5 0-6-1.2-9.2-4.9-13.1-2-2-6-4-8.2-4-1.1 0-2.2-.7-2.5-1.5-.7-1.7-9.9-2.2-10.9-.5-.9 1.4-11.9 1.2-13.3-.2-.9-.9-1.5-.9-2.3-.1-.8.8-1.8.8-3.5.1-1.8-.9-3-.8-5 .2-2 1.1-2.9 1.2-4.5.1-1.4-.8-2.4-.9-3.3-.2-.9.7-1.6.7-2.3 0-.8-.8-1.7-.7-3.2.3-1.7 1-2.5 1-4.2 0-1.6-1-2.4-1-3.5-.1s-1.7.9-2.9-.1-1.8-1-2.9-.1c-1 .8-1.6.9-2.1.1-1-1.6-9.1-1.2-10.5.5zM1131 726.5c-.7.8-1.9 1.5-2.6 1.5-2.4 0-10.4 6.3-10.4 8.2 0 1-.4 1.8-1 1.8-.5 0-1 .8-1 1.7 0 1-.7 3.1-1.5 4.7-2.2 4.1-2.1 116.3.1 120.4.8 1.5 1.4 3.3 1.4 4 0 .7.7 2 1.5 2.8.8.8 1.2 2.1.9 2.9-.4 1 0 1.5 1.4 1.5 1.1 0 2.5.7 3.2 1.5 1 1.2 1.6 1.3 2.6.4 1.1-.9 1.8-.8 2.9.1 1.1 1 1.8.9 3-.4 2-2 2.9-2 4.5-.1 1.7 2 4 1.9 5.6-.3 1.3-1.6 1.5-1.6 3 .3 1.4 1.9 1.6 1.9 2.5.2 1.3-2.1 2.7-2.2 5.1 0 1.7 1.5 1.9 1.5 3.1-.1 1.2-1.6 1.4-1.6 2.6-.2.8.9 1.9 1.6 2.6 1.6.7 0 1.8-.7 2.6-1.6 1.2-1.4 1.4-1.4 2.6.2 1.2 1.7 1.4 1.7 2.7-.2 1.5-1.9 1.5-1.9 2.9 0s1.4 1.9 2.6 0c1.1-1.9 1.1-1.9 2.7.1 1.4 1.9 1.6 1.9 2.5.2.8-1.4 2.4-1.7 9.4-1.7 6.8 0 8.6-.3 9.3-1.7.6-1 1.6-1.4 2.6-1 1 .4 1.9.1 2.2-.8.4-.8 1.5-1.5 2.6-1.5s3.1-.9 4.4-1.9c1.4-1.1 3.3-1.7 4.4-1.4 1.6.4 2 0 2-2.1s.5-2.6 2.4-2.6c1.8 0 2.6-.6 2.8-2.2.2-1.2 1.2-2.5 2.3-2.8 3.7-.9 11.5-9.2 11.5-12.1 0-1.4 1.1-3.8 2.5-5.3s2.5-3.6 2.5-4.7 1.2-3.6 2.7-5.5c2.3-3.1 2.6-4.4 2.4-9.6-.2-4.6.2-6.4 1.6-8 1.7-1.9 1.7-2 0-2.9-.9-.6-1.7-1.5-1.7-2.1 0-.6.8-2 1.7-3.1 1.7-1.8 1.7-1.9 0-2.8-2.1-1.2-2.2-2.7 0-5.1 1.5-1.7 1.5-1.9 0-3.1-1.8-1.3-2.5-5.9-1.3-9.5.5-1.6.3-2.4-.8-2.8-1-.4-1.6-1.9-1.6-4 0-2.2-.6-3.7-1.5-4-.8-.4-1.5-1.7-1.5-2.9 0-1.3-.5-2.5-1.1-2.7-.5-.2-1.1-1.1-1.3-2.1-.1-1-1.4-3.1-2.9-4.7-1.5-1.5-2.7-3.3-2.7-3.9 0-.6-1.8-3-4-5.2-2.2-2.3-4-5-4-6 0-1.3-.7-1.9-2.1-1.9-1.2 0-3-1.1-4.1-2.5-1.1-1.4-2.6-2.5-3.3-2.5-.8 0-2.8-1.4-4.5-3-2-1.9-4.1-3-5.9-3-1.6 0-3.4-.7-4.1-1.5-.7-.9-2.1-1.3-3.4-.9-1.4.3-2.8-.1-3.5-1-1-1.2-3.4-1.6-10.1-1.6-7.4 0-8.9-.3-9.5-1.8-.6-1.6-.7-1.6-1.9 0-.7 1-2.2 1.8-3.4 1.8-1.1 0-2.3-.8-2.7-1.8-.6-1.6-.7-1.6-1.9 0-1.6 2.2-6.9 2.4-8.6.3-1.7-2-10.8-2-13 0-1.5 1.4-1.8 1.4-3 0-1.6-1.9-6.4-1.9-8 0zm24.2 39.1c1.6 1.6 1.8 1.6 2.4 0 .9-2.3 22.5-2.4 24.4-.1.7.8 2 1.5 2.9 1.5.9 0 2.1.4 2.7.9.5.5 1.8 1.1 2.9 1.3 1.1.2 2.2 1.4 2.5 2.8.3 1.4 1.4 2.6 2.4 2.8 2.3.5 5.6 3.8 5.6 5.6 0 .7.7 1.9 1.5 2.6.8.7 1.5 2.4 1.5 3.8s.7 3.3 1.5 4.2c1.2 1.4 1.6 4.4 1.6 13.8 0 14.7-.5 15.9-12.3 27.1l-8.6 8.1h-18c-18 0-18 0-19.6-2.4-.9-1.5-1.2-2.7-.6-3.1 1.3-.8.9-26.5-.4-28.7-.8-1.3-.7-2.1.2-3 1.5-1.5 1.6-7.2.1-9.9-.7-1.3-.7-2.4-.1-3.2 1-1.3.9-9.5-.2-13.8-.6-1.9-.1-3.1 1.9-5.2 1.5-1.4 2.4-3.1 2-3.7-.6-1 .1-3 1.2-3 .4 0 1.5.7 2.5 1.6zM609.3 1229.1c-.6.6-5.3 1.3-10.4 1.6-6.5.3-9.9.9-11.1 2-1.1 1-2.6 1.3-4.1.9-1.6-.4-2.9 0-3.8 1-1.2 1.4-1.4 1.4-2.4 0-1-1.3-1.5-1.1-3.4 1.4-1.2 1.7-2.9 3-3.8 3-2.2 0-9.3 3.2-9.3 4.2 0 .4-.7.8-1.6.8-.9 0-2.7.9-4.1 2-1.5 1.2-3.4 1.8-4.7 1.5-1.6-.4-2.7.4-4.6 3-1.4 2-3.9 4.2-5.6 5-4.3 2.2-26.4 23.8-26.4 25.9 0 2.3-4.9 8.6-6.6 8.6-.8 0-1.4.9-1.4 2s-.7 2.3-1.5 2.6c-.8.4-1.5 1.7-1.5 3s-.5 2.4-1.1 2.4c-.7 0-.9 1-.5 2.5.4 1.7 0 3.1-1.4 4.5-1.1 1.1-2 3.3-2 4.9 0 1.6-.7 3.4-1.5 4.1-.8.7-1.5 2.1-1.5 3.1s-.7 2.2-1.6 2.7c-1.1.6-1.5 1.7-1.2 3 .3 1.2 0 2.9-.8 3.9-.9 1.2-1.3 4.8-1.4 11 0 8.2-.2 9.4-2 10.5-2.2 1.4-2.7 5.3-.7 6.2 1 .5 1 .7 0 1.2-1.6.7-1.9 23.4-.3 23.4.6 0 1 .9 1 2s-.4 2-1 2c-1.6 0-1.1 4.2.6 5.5 1 .7 1.9 3.6 2.4 7.6.5 3.5 1.3 8.2 1.9 10.4.6 2.2.8 5.4.5 7.1-.4 2.3-.1 3.3 1 3.7.9.4 1.6 1.7 1.6 3.1 0 1.3.7 2.6 1.5 3 1 .4 1.5 1.9 1.5 4.9 0 2.9.6 4.9 1.6 5.8 2.6 2.1 6.4 8.6 6.4 10.9 0 1.1.5 2 1 2 .6 0 1 .7 1 1.5s1.8 3.4 4 5.6c2.2 2.3 4 4.9 4 5.8 0 1.7 19.2 21.1 20.8 21.1.6 0 3 1.8 5.4 4 2.3 2.2 4.8 4 5.5 4 .7 0 2.6 1.4 4.3 3 1.7 1.7 3.8 3 4.6 3 .9 0 2.5 1.1 3.6 2.5 1.4 1.8 2.9 2.5 5.4 2.5 2.2 0 3.7.6 4.1 1.6.4 1 1.3 1.4 2.8 1 1.4-.4 3.2.1 4.6 1.3 1.3 1 2.9 1.6 3.6 1.4.7-.2 2.2.2 3.5.9 1.3.7 3.2 1.3 4.3 1.4 1.1 0 3.7.1 5.8.2 3 .2 4 .7 4.4 2.2.5 2 1.4 2 292.8 2 232.9 0 292.5-.3 292.9-1.3.5-1 .7-1 1.2 0 .7 1.7 5.1 1.7 5.7 0 .4-.9.6-.9.6 0 .1 1.5 7.1 1.8 7.1.3 0-.6 2-1 4.5-1s4.5.4 4.5 1c0 .5 2.3 1 5 1 2.8 0 5-.5 5-1 0-.6.7-1 1.5-1s1.5.4 1.5 1c0 .5 2.3 1 5 1 2.8 0 5-.5 5-1 0-.6 2-1 4.5-1s4.5.4 4.5 1 7.7 1 21 1 21-.4 21-1 .7-1 1.5-1 1.5.4 1.5 1c0 1.5 9.7 1.3 10.3-.3.4-.9.6-.9.6 0 .1 1.9 41.7 1.9 42.4 0 .4-.9.6-.9.6 0 .1 1.8 22.7 1.8 23.4 0 .4-.9.6-.9.6 0 .1 1.7 6.8 1.7 7.4 0 .4-.9.6-.9.6 0 .1 1.7 6.8 1.7 7.4 0 .4-.9.6-.9.6 0 .1.7 1 1.3 2 1.3 1.1 0 2.2-.6 2.5-1.3.5-1 .7-1 1.2 0 .4.9 2.8 1.3 6.7 1.3 5.1 0 6.4-.4 7.5-2 1-1.6 2.3-2 7.1-2 3.3 0 6.3-.4 6.6-1 .3-.6 2.4-1 4.5-1 2.2 0 4.5-.7 5.5-1.6.8-.9 3.4-1.7 5.7-1.8 3-.1 4.8-.8 6.8-2.7 2-2 3.3-2.6 5.3-2.2 1.9.4 2.9 0 3.3-1.1.3-.9 1.3-1.6 2.1-1.6s4.6-2.8 8.4-6.3c3.8-3.4 7.5-6.4 8.2-6.6 2-.7 18.7-17.9 18.7-19.4 0-.7 1.1-2.4 2.5-3.7 1.4-1.3 2.5-2.9 2.5-3.5 0-.6 1.8-3.1 4-5.5s4-5.1 4-6.1c0-.9.7-1.9 1.5-2.3.8-.3 1.5-1.8 1.5-3.3 0-1.6 1.1-4 2.5-5.5s2.5-3.6 2.5-4.8c0-1.1.7-2.3 1.5-2.6 1-.4 1.5-2.1 1.5-5.4 0-3.5.4-5 1.6-5.4 1.3-.5 1.4-.9.4-2.1-.6-.8-.9-1.9-.5-2.5.4-.6.8-2.5 1.1-4.3.2-1.7.8-3.3 1.4-3.5 1.4-.5 1.3-2.9-.2-3.5-1-.4-1-.7 0-1.8.7-.8 1.2-4.3 1.2-9.6 0-7.2.3-8.4 2-9.5 2.3-1.5 2.7-4.8.5-4.8-.8 0-1.6-.3-1.6-.8-.8-5.2-.6-6.4 1.2-7.5 2.2-1.4 2.5-2.7.5-2.7s-2.3-1.3-2.5-13.9c-.1-6.6-.7-12.1-1.4-13.3-1-1.5-.9-2.1.3-2.8.9-.6 1.1-1.3.5-1.8-1.9-1.3-3.5-7.5-2.4-8.8.7-.9.6-1.5-.3-2.1-2.8-1.8-4.1-4.2-2.9-5.7.9-1 .8-1.5-.4-2-.8-.3-1.5-1.7-1.5-3.1 0-1.4-.3-2.5-.7-2.5-1.1 0-4.3-5.9-4.3-7.9 0-1-1.1-2.8-2.5-4.1-1.4-1.3-2.5-3.1-2.5-3.9 0-.9-1.2-2.7-2.5-4-1.4-1.3-2.5-2.8-2.5-3.4 0-.5-3.1-4.5-7-8.8-3.8-4.2-7-8.2-7-8.8 0-.6-1.1-1.6-2.5-2.1s-2.5-1.6-2.5-2.3c0-1.8-4.2-5.7-6.2-5.7-1 0-1.8-1-2-2.3-.2-1.7-1-2.2-3.3-2.2-2.2 0-3.3-.7-4.3-2.8-1-2-2-2.7-4.1-2.7-1.6 0-3.4-.7-4.1-1.5-.7-.8-1.9-1.5-2.7-1.5-.7 0-2.6-1.1-4.1-2.5-1.6-1.5-3.9-2.5-5.7-2.5-1.7 0-4-.7-5.1-1.5-1-.8-2.6-1.5-3.5-1.5-.9 0-2.2-.7-2.9-1.5-.8-.9-2.9-1.5-5.6-1.5-2.3 0-4.6-.5-4.9-1-.3-.6-1.4-1-2.4-1s-2.4-.7-3.1-1.5c-1.2-1.4-1.5-1.4-3 0-2.2 2-11.3 2-13 0-1-1.2-1.6-1.3-2.6-.4-1.1.9-1.8.8-2.9-.1-1.1-1-1.8-.9-3 .4-2 2-2.4 2-4.6 0-1.4-1.3-2-1.3-3.8-.2-1.7 1-2.5 1-4.1 0-1.6-1-2.4-1-4 0s-2.4 1-4 0-2.4-1-4 0-2.4 1-4 0c-1.6-.9-2.4-1-3.9 0-1.6 1-2.5.9-4.6-.2-2.1-1.1-3-1.2-4.5-.2-2.5 1.5-7.3 1.5-8.8 0-.9-.9-1.5-.9-2.4 0-1.5 1.5-5.4 1.6-6.3.2-.9-1.4-4.2-1.2-4.8.2-.3 1-.9 1-2.5.1-1.3-.8-2.3-.9-2.7-.3-.8 1.3-5.2 1.3-6 0-.8-1.3-8.8-1.3-10.2.1-.8.8-1.7.7-3.2-.3-1.7-1.1-2.5-1.1-4.2 0-1.5 1-2.4 1.1-3.2.3-1.4-1.4-18.4-1.5-19.2-.1-.9 1.4-11.8 1.3-13.3-.2-.8-.8-1.5-.8-2.7.2-1.4 1.2-1.8 1.1-2.5 0s-1.1-1.1-2.3-.1c-1.2 1-2 1-3.6-.1-1.7-1-2.5-1-4.2 0-1.6 1.1-2.4 1.1-3.6.1-1.2-1-1.6-1-2.3.1-.7 1.1-1.1 1.1-2.4.1-1.3-1.1-1.9-1.1-3.1-.1-1.2 1-1.9 1-2.7.2-1.5-1.5-6.5-1.6-7.3-.2-.3.5-1.7 1-3 1s-2.7-.5-3-1c-.9-1.4-7.2-1.2-7.8.2-.3 1-.9 1-2.4.1-1.5-.8-2.3-.9-3.1-.1-.8.8-1.6.7-2.7-.2-1.2-1-1.9-1-2.7-.2-1.5 1.5-7.4 1.6-8.3.2-.8-1.3-8.8-1.3-10.2.1-.8.8-1.7.7-3.2-.3-1.7-1-2.5-1-4.2 0-1.7 1.1-2.3 1.1-3.6 0-1.3-1-1.7-1-2-.1-.3.7-1.1 1.3-1.8 1.3s-1.5-.6-1.8-1.3c-.3-.9-.7-.9-2 .1-1.3 1.1-1.9 1.1-3.6 0-1.7-1-2.5-1-4.2 0-1.5 1-2.4 1-3.4.2-.9-.8-1.5-.8-2 0-.8 1.3-13.2 1.3-14 0-.4-.6-1.4-.5-2.7.3-1.6.9-2.2.9-2.5-.1-.6-1.7-2.9-1.5-5.9.5-2.3 1.5-2.7 1.5-4.1 0-1.3-1.2-2-1.3-3.5-.4-1.5 1-2 .9-2.8-.3-.8-1.2-1.1-1.2-2.8.3-1.9 1.7-5.2 1.4-5.2-.4 0-1.3-3.4-1.1-4.8.3-1 1-1.7 1-3.2 0-2.7-1.6-6.5-1.5-8 .3-1.4 1.6-7.2 1.4-7.8-.4-.5-1.5-2.7-1.4-5.2.1-1.7 1.1-2.2 1-3-.2-.8-1.2-1.1-1.2-2.7.2-1 .8-2.7 1.5-3.8 1.5-1.1 0-2.8-.7-3.8-1.5-1.6-1.4-2-1.4-2.7-.2-.7 1.2-1.3 1.2-3.3.1-2.1-1.1-2.8-1.1-5.1.4-2.5 1.6-2.8 1.6-4.5.1-2.1-1.9-3.5-2-6.1-.4-1.7 1.1-2.2 1-3.1-.2-.8-1.1-1.2-1.2-1.6-.3-.2.7-1.1 1.3-1.8 1.3s-1.5-.6-1.8-1.3c-.3-.9-.7-.9-2 .2-1.4 1.1-2 1.1-3.3 0-1.3-1.1-1.7-1-2.5.4-1.2 2.1-3.3 2.2-4.9.2-1.4-1.7-7.7-2-8.2-.4-.2.7-3 1.1-6.8 1.1s-6.6-.4-6.8-1.1c-.5-1.6-25.9-1.5-26.5.1-.3 1-.9 1-2.6 0-2.6-1.5-6.3-1.6-7.8-.1-1.6 1.6-10.3 1.5-11.3-.1-.7-1.1-1.1-1.1-2.5 0-1.1.9-1.9 1-2.7.2-.8-.8-1.6-.7-3.1.1-1.5.9-2.1.9-2.4-.1-.6-1.6-8.5-1.6-10.1 0-1 1-1.7 1-3.2 0-2.3-1.4-5-1.6-5-.3 0 1.8-3.3 2.1-5.2.4-1.7-1.5-2-1.5-2.8-.3-.8 1.2-1.3 1.3-2.8.3-1.5-.9-2.2-.9-3.1 0-.8.8-1.4.8-2.2 0-.9-.9-1.6-.9-3.1 0-1.5 1-2.1.9-2.8-.3-.9-1.3-1.1-1.3-2 0-.8 1.2-1.3 1.3-3 .2-1.1-.6-2.6-1.2-3.4-1.2-.8 0-1.6.6-1.9 1.2-.3 1-.9 1-2.6 0-2.6-1.5-9.3-1.6-10.8-.1-.8.8-1.7.7-3.2-.3-1.7-1-2.5-1-4.1 0-1.6 1-2.4 1-4 0s-2.4-1-4 0c-2.4 1.5-10.2 1.6-11.7.1-.8-.8-1.7-.7-3.2.3-1.7 1.1-2.5 1.1-4.2 0-1.5-1-2.4-1.1-3.2-.3-1.5 1.5-6.3 1.4-8.7-.1-1.6-1-2.4-1-4 0-2.4 1.4-7.6 1.6-8.5.2-.3-.6-3.3-1-6.5-1s-6.2.4-6.5 1c-.9 1.4-9.9 1.2-11.3-.2-.9-.9-1.5-.9-2.4 0-1.5 1.5-12 1.6-13.5.1-.8-.8-1.7-.7-3.2.3-1.7 1-2.5 1-4.1 0-2.4-1.4-7.6-1.6-8.5-.2-.9 1.4-9.1 1.2-11.5-.2-1.6-1-2.4-1-4.1 0-1.5 1-2.4 1.1-3.2.3-1.5-1.5-7-1.4-8.5.1-.9.9-1.5.9-2.3.1-.9-.9-1.7-.9-3.2 0-1.5.9-2.1.9-2.4-.1-.6-1.6-3.3-1.5-5.7.3-1.7 1.3-2.3 1.2-4.8-.3-2.4-1.4-3.2-1.5-4.9-.3-1.5.9-2.4 1-3.2.2-1.5-1.5-8.2-1.4-10.8.1-1.7 1-2.3 1-2.6 0-.6-1.5-3.5-1.6-5.1 0-.8.8-1.5.8-2.7-.2-1.3-1.1-1.9-1-3.5.5-1.9 1.7-2.1 1.7-4 0-1.6-1.5-2.2-1.6-3.5-.5-1.2 1-1.9 1-2.7.2-.8-.8-1.7-.7-3.3.4-1.8 1.2-2.4 1.2-4.1-.1-2.3-1.8-4.6-1.9-6.2-.3-1.5 1.5-9.4 1.1-10.4-.5-.5-.8-1.2-.6-2.5.5-2 1.8-7.2 1.6-8.4-.3-.6-1-1.1-1-2.4.1-2.1 1.8-6.3 1.9-7.7.3-1.3-1.6-7-1.7-8.5-.2zm29.2 92.5c1.3 1.3 1.8 1.4 3.1.3 1.1-.9 1.8-.9 2.6-.1 1.6 1.6 4.3 1.5 5.8-.3 1.6-1.9 2.5-1.9 4.5.1 1.3 1.3 1.8 1.4 3.1.3 1.1-.9 1.8-.9 2.6-.1s1.6.7 3-.1c1.5-1 2-.9 2.8.3.8 1.2 1.1 1.2 2.8-.3 1.9-1.7 5.2-1.4 5.2.4 0 1.5 6.7 1 8-.6 1.6-1.9 2.5-1.9 4.5.1 1.5 1.5 1.7 1.5 3.4 0 2.2-2 2.6-2 4.5-.1 1.4 1.4 1.8 1.4 3.9 0 2.1-1.3 2.6-1.3 4.3 0 2.4 1.8 5.1 1.9 5.7.2.3-.9.9-.9 2.3-.1s2.4.8 3.8 0 2-.8 2.3.1c.6 1.6 3.5 1.7 5.1.1.8-.8 1.5-.8 2.6.1 1.3 1.1 1.8 1 3.1-.3 2-2 2.9-2 4.5-.1 1.5 1.8 4.2 1.9 5.8.3.8-.8 1.5-.8 2.7.2 1.4 1.2 1.8 1.1 2.5-.1.8-1.1 1.3-1.2 3-.2 2.8 1.8 9.5 1.6 11-.2 1.6-1.9 2.5-1.9 4.5.1 1.5 1.5 1.7 1.5 3.4 0 2.2-2 2.6-2 4.6 0 1.3 1.3 1.8 1.4 3.1.3 1.1-.9 1.8-.9 2.6-.1s1.6.7 3-.1c1.5-1 2.1-.9 2.8.3.9 1.3 1.1 1.3 2 0 .8-1.2 1.3-1.3 3-.3 2.3 1.5 5 1.7 5 .4 0-1.8 3.3-2.1 5.2-.4 1.7 1.5 2 1.5 2.8.3.8-1.2 1.3-1.3 3-.3 1.1.7 2.6 1.3 3.4 1.3.8 0 1.6-.6 1.9-1.3.3-.9.9-.9 2.5 0 1.6 1 2.3.9 3.2-.2 1.7-2.1 11.3-2 13 0 1.5 1.8 4.7 2 5.3.2.3-.9.9-.9 2.5 0 1.6 1 2.3.9 3.2-.2 1.7-2.1 11.3-2 13 0 .7.8 2 1.5 3 1.5s2.3-.7 3-1.5c1.7-2 6-1.9 7.6.2 1.3 1.7 1.5 1.7 2.5 0 1.2-2.1 5.7-2.2 7.9-.2 1.5 1.4 1.8 1.4 3 0 1.8-2.2 17.8-2.2 18.6 0 .4.8 1.4 1.5 2.4 1.5s2.3-.7 3-1.5c1.6-1.9 2.9-1.9 5.3.2 1.8 1.7 1.9 1.7 2.8 0 .8-1.4 2.6-1.7 11-1.7 7.9 0 10.1.3 10.5 1.5.4 1 2 1.5 4.9 1.5 2.6 0 4.7-.6 5.5-1.5 1.7-2 4-1.9 5.6.2 1.3 1.7 1.5 1.7 2.5-.1 1.2-1.9 1.2-1.9 2.6 0 1.3 1.8 1.5 1.8 2.7.1.7-.9 2-1.7 2.9-1.7.9 0 2 .8 2.6 1.7.9 1.7 1.1 1.7 2.5-.2 1.5-1.9 1.7-1.9 3-.3 1.6 2.2 5.9 2.3 7.6.3 1.2-1.4 1.5-1.4 3.1.1 1.7 1.5 1.9 1.5 2.5 0 .9-2.3 19.5-2.4 21.4-.1.7.8 2.5 1.5 4 1.5s3.3-.7 4-1.5c1.8-2.2 9.6-2 11 .2 1 1.7 1 1.7 2 0 .9-1.4 2.5-1.7 8.2-1.7 5.6 0 7.4.4 8.4 1.7 1.3 1.7 1.5 1.7 2.5 0 1.4-2.3 14-2.5 15.9-.2 1.7 2 4 1.9 5.6-.3 1.2-1.6 1.3-1.6 2.6.1 1.3 1.7 1.5 1.7 2.7.3 1.8-2.1 10.8-2.2 13.1-.1 1.5 1.4 1.8 1.4 3 0 1.7-2 9.8-2.1 10.6 0 .8 1.9 3.8 1.9 5.4 0 .7-.8 2.5-1.5 4-1.5s3.3.7 4 1.5c1.6 2 4.6 1.9 5.4-.1.6-1.5.8-1.5 2.5 0 1.6 1.5 1.9 1.5 3.1.1 1.7-2.1 14.2-2.1 16 0 1.7 2.1 10.8 2 13.1-.1 1.8-1.6 5.9-1.2 5.9.7 0 1.5 3.6 1 5-.6 1.7-2 6.7-1.9 7.9.2.8 1.4 1.2 1.5 2.5.4 1.2-1 1.9-1.1 3-.2 1 .9 1.6.8 2.6-.4 1.7-2 6.7-1.9 7.9.2.8 1.5 1.1 1.5 2.5.3 1.3-1 2-1 2.8-.2 1.6 1.6 4.5 1.5 5.1-.1.3-1 .9-1 2.6 0 2.8 1.7 6.6 1.6 8.1-.2 1.2-1.4 1.5-1.4 3 0s1.8 1.4 3 0c1.6-2 4.9-1.9 7.2.2 1.7 1.5 1.9 1.5 3.1-.1 1.2-1.6 1.4-1.6 2.6-.2 1.5 1.8 4.8 2.1 5.3.5.6-1.8 6.4-2 7.8-.4 1.6 1.9 4.4 1.9 6 0 1.6-1.9 3.4-1.9 5 0 .9 1.1 1.6 1.2 3.2.2 1.6-.9 2.2-.9 2.5 0 .6 1.6 3.5 1.7 5 .2s19.8-1.5 21.7 0c1 .9 1.6.8 2.6-.4 1.6-1.9 3.4-1.9 5 0s4.4 1.9 5.9.1c1.5-1.8 5.1-1.7 7.4.2 1.5 1.3 1.9 1.3 3.5 0 1.9-1.7 8.8-1.6 10.5.1 1.5 1.5 4.4 1.4 5-.2.3-.9.9-.9 2.4 0 1.4.8 2.4.8 3.1.1.6-.6 1.7-.5 3.1.4 1.7 1.1 2.5 1.1 4.2 0 1.5-1 2.4-1.1 3.2-.3 1.5 1.5 9 1.4 10.5-.1.9-.9 1.7-.9 3.6.2 2 1 2.8 1 4 .1 2.4-2 7.1-2.4 8.6-.6 1.5 1.8 4.7 2 5.2.3.3-.8 1.1-.9 2.4-.3 1 .4 3.2.9 4.8 1.1 1.6.1 3.3.9 3.8 1.8.6 1 2.2 1.6 4.3 1.6 2.9 0 3.6.4 4.1 2.5.5 2 1.2 2.5 3.7 2.5 2.4 0 4.3 1.3 9.4 6.5 3.6 3.6 6.2 6.9 5.8 7.4-.3.5.1 1.3.8 1.8 2.4 1.4 4 5.3 2.7 6.7-.8 1-.7 1.5.5 2 1.1.4 1.5 2.1 1.5 6.9 0 3.5.5 6.8 1.2 7.5.9.9.9 1.8 0 3.7-.7 1.4-1.2 3.9-1.2 5.4 0 1.6-.7 3.4-1.5 4.1-.8.7-1.5 2.5-1.5 4s-.7 3.3-1.5 4c-.8.7-1.5 1.8-1.5 2.4 0 1.8-11.5 13.6-13.2 13.6-.9 0-2.1.7-2.8 1.5-.7.9-2.9 1.5-5.5 1.5s-4.8.6-5.5 1.5c-.7.8-2.1 1.5-3.1 1.5s-2.1.5-2.5 1.1c-.4.8-.9.8-1.7 0-1.5-1.5-5-1.4-6.6.1-1.1 1-1.4 1-1.8 0-.6-1.4-4.9-1.6-5.8-.2-.8 1.3-7.5 1.3-7.5 0 0-1.4-6.6-1.2-9 .2-1.6 1-2.4 1-4 0-2.6-1.6-10.2-1.6-11.9 0-1.1 1-1.4 1-1.8 0-.6-1.5-9.5-1.6-11.1 0-.8.8-1.5.8-2.7-.2-1.1-.9-1.8-1-2.9-.1-1 .8-1.6.9-2.1.1-.9-1.4-5.2-1.3-5.8.2-.4 1-.7 1-1.8 0-1.6-1.4-5.5-1.6-6.4-.2-.9 1.4-4.2 1.2-4.8-.3-.3-1-.9-1-2.6 0-2.8 1.7-12.8 1.7-13.4 0-.3-.9-.9-.9-2.8.2-1.6 1-2.4 1-2.7.2-.5-1.5-9.5-1.4-11.1.1-1.1 1-1.4 1-1.8 0-.3-.6-1.1-1.2-1.8-1.2s-1.5.6-1.8 1.2c-.3 1-.7 1-2-.1-1.4-1.1-2-1.1-3.4 0-1.3 1.1-1.7 1.1-2 .1-.5-1.4-4.9-1.6-5.8-.2-.9 1.4-6.1 1.2-8.5-.2-1.6-1-2.4-1-4.1 0-1.6 1.1-2.4 1.1-3.6.1-1.2-1-1.6-1-2.3.2-.7 1.1-1.2 1.1-2.2.1-1.6-1.6-9.2-1.6-11.8 0-1.6 1-2.4 1-4.1 0-1.5-1-2.4-1.1-3.2-.3-1.5 1.5-66.3 1.5-67.2.1-.9-1.4-11.8-1.3-13.3.2-.8.8-1.5.8-2.7-.2-1.2-1-1.9-1-2.7-.2-1.6 1.6-9.1 1.5-10.6 0-.9-.9-1.5-.9-2.4 0-.7.7-3.7 1.2-6.8 1.2-3.1 0-6.1-.5-6.8-1.2-.9-.9-1.5-.9-2.4 0-1.6 1.6-7.5 1.5-8.1-.1-.3-.9-1-.9-3.1.3-2.2 1.1-3.1 1.2-4.6.2-2.4-1.4-11-1.6-11-.2 0 1.4-2.7 1.3-3.2-.1-.3-.8-1-.8-2.5.2-1.8 1.1-2.6 1.1-4.9-.1-2.1-1.2-2.8-1.2-3.1-.3-.5 1.5-6.9 1.7-7.8.3-.9-1.4-5.3-1.2-5.8.2-.3 1-.7 1-2-.1-1.4-1.1-2-1.1-3.3 0-1.3 1-1.7 1-2.4-.1s-1.1-1.2-2.5 0c-1.2 1-1.9 1-2.7.2-1.6-1.6-6.3-1.5-8.8 0-1.6 1-2.4 1-4 0-2.4-1.4-6-1.6-6-.2 0 1.4-3.6 1.2-6-.2-1.6-1-2.4-1-4 0-2.4 1.4-7.6 1.6-8.5.2-.3-.6-2.4-1-4.6-1-2.1 0-3.9.4-3.9 1 0 .5-1.1 1-2.5 1s-2.5-.5-2.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1c0 .5-1.1 1-2.5 1s-2.5-.5-2.5-1c0-.6-1.1-1-2.4-1-1.4 0-2.8.4-3.1 1-.4.6-13.2 1-35 1s-34.6-.4-35-1c-.3-.6-3.9-1-8-1s-7.7.4-8 1c-.3.5-4 1-8.1 1-4.3 0-7.4-.4-7.4-1 0-1.4-2.7-1.2-3.3.2-.4 1-.7 1-1.8 0-1.6-1.4-5.9-1.6-5.9-.2 0 .5-1.5 1-3.4 1s-3.8-.5-4.1-1c-.3-.6-1.7-1-3.1-1-1.3 0-2.4.4-2.4 1 0 1.4-2.7 1.2-3.3-.3-.4-.9-.8-.9-1.6.3s-1.3 1.2-3.6 0c-2.1-1.1-3-1.2-4.5-.2-2.4 1.5-7.6 1.6-8.5.2-.9-1.4-6.8-1.3-8.3.2-.8.8-1.5.8-2.7-.2-1.2-1-1.9-1-2.7-.2-1.5 1.5-15.8 1.6-15.8.2 0-.6-.7-1-1.5-1s-1.5.4-1.5 1c0 .5-1.5 1-3.4 1s-3.8-.5-4.1-1c-.3-.6-1.7-1-3.1-1-1.3 0-2.4.4-2.4 1 0 .7-21.2 1-61.5 1s-61.5-.3-61.5-1c0-.6-2.8-1-6.5-1-5.2 0-6.9-.4-8.5-2-1.1-1.1-2-2.5-2-3 0-.6-1-.8-2.3-.5-2.6.7-7.3-2.9-7.9-6.1-.2-1-1.4-2.1-2.7-2.4-1.5-.3-3.2-2-4.4-4.3-1-2-2.3-3.7-2.8-3.7s-.9-1.1-.9-2.4c0-1.3-.7-2.9-1.5-3.6-.8-.7-1.5-2.4-1.5-3.9 0-1.4-.7-3.5-1.5-4.5-2.1-2.8-2.1-17.4 0-18.2.9-.4 1.5-1.9 1.5-3.9 0-1.8.7-3.8 1.5-4.5.8-.7 1.5-2.1 1.5-3.1s.5-2.1 1-2.4c.6-.3 1-1.4 1-2.4 0-2.2 12.8-14.1 15.2-14.1.9 0 2-.5 2.3-1 .3-.6 1.4-1 2.4-1s2.4-.7 3.1-1.5c.8-1 3-1.5 6.4-1.5 2.9 0 5.6-.4 6.2-.9.5-.5 2-1.1 3.4-1.4 1.4-.2 2.6-.5 2.7-.6.1 0 .9.6 1.8 1.5z" />
  </Svg>
)
export default Feed