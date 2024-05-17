import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Travel = (props: SvgProps) => (
  <Svg
    fill={"#7f5539"}
      width={"100%"}
    height={"100%"}
    viewBox="0 0 2000 2000"
    {...props}
  >
    <Path d="M903.9 498.4c-.2.2-2.9.6-5.9.9-3 .3-6.4.8-7.5 1.1-1.1.2-5.4 1.2-9.5 2.2-4.1 1-8.1 1.8-8.7 1.7-.7 0-1.3.3-1.3.8s-.4.9-.9.9-2.2.5-3.8 1.2c-1.5.6-3.1 1.1-3.5 1-.5-.1-.8.3-.8.9 0 .5-.5.7-1.1.3-.6-.3-1.4-.2-1.8.3-.7 1.1-13.1 8.5-13.1 7.8 0-.6-1.3.5-9.5 8-3.3 3-6.6 5.5-7.2 5.5-.7 0-1.3.6-1.3 1.2 0 .7-1.4 2.9-3.1 4.8-7.8 8.7-19.1 28.9-20.5 36.7-.3 2.1-1.2 4.4-1.8 5.2-.6.8-1 1.6-.8 1.8.1.1.2.4.1.5 0 .2-.3 1.6-.5 3.3-.3 1.6-.7 3.9-.9 5-.2 1.1-.4 20.9-.4 44-.1 23.1-.5 42.6-1 43.3-.6.9-4 1.3-12.4 1.3-6.3.1-13.5.5-15.9 1.1-2.4.6-4.9 1.1-5.5 1.1-.7 0-1.3.4-1.3.9 0 .4-.6.8-1.2.8-1.9.1-6.4 7-7.8 11.9-.8 3.2-1.1 45-1 164 .1 87.8.2 163.9.2 169.1 0 5.2-.1 77.2-.2 160s-.1 172.9 0 200.3c.1 35.7-.2 50.2-1 51.2-.9 1.1-6.1 1.4-24.4 1.5-20.7 0-23.5-.1-24.7-1.6-1.2-1.5-1.4-57.1-1.4-372.8V694.5l-2.1-4.5c-1.2-2.5-3.8-6.1-5.7-8.1-5.4-5.4-11.8-6.3-40.7-5.5-24.1.6-30.8 1.1-34.4 2.2-1.2.4-3 .9-4.1 1-3.7.6-5 1-6.2 1.7-.7.5-1.7.5-2.3.2-.5-.3-1-.1-1 .4 0 .6-1.6 1.1-3.5 1.1s-3.5.5-3.5 1.1c0 .5-.4.8-.9.4-.5-.3-1.3 0-1.6.6-.4.5-1.3.8-2.1.5-.8-.3-1.4-.1-1.4.4 0 .6-.6 1-1.4 1-.7 0-2.6.7-4.2 1.4-1.5.8-3.1 1.3-3.6 1-.4-.3-.8-.1-.8.4s-2.8 2.2-6.2 3.7c-3.5 1.5-7.1 3.4-8 4.3-1 .8-1.8 1.2-1.8.8 0-.4-.7 0-1.6.8-.8.9-2.3 1.6-3.1 1.6-.9 0-1.3.3-1 .6.4.4-1.3 1.9-3.6 3.4s-5.7 4-7.6 5.6c-3.6 3-21.8 21.2-23.6 23.6-.6.7-3.1 4-5.5 7.3-4.4 5.8-5.1 6.8-7.8 10-.7.8-1 1.5-.7 1.5.3 0-.8 2-2.5 4.4-1.6 2.5-3 4.9-3 5.3 0 .5-.5 1.4-1.2 2.1-.6.6-1.3 2-1.4 2.9-.1 1-2 5.8-4.2 10.8-2.1 4.9-4 9.7-4 10.5-.1.8-1 4.9-2.1 9-3.8 14.3-4.4 24.4-4.4 80.7-.1 51.1 0 54.4 1.8 58.5 3.9 8.7 9.3 15.7 12.3 15.8.7 0 1.1.4.7.9-.3.6.3 1 1.2 1 1 0 4.1.5 6.8 1 2.8.5 30.5 1 61.8 1 31.2.1 57.7.5 59 1 1.2.5 3.4 2.2 4.8 3.7 5.9 6.4 5.6 0 5.4 111.9-.1 56.6-.5 104-.9 105.1-.4 1.2-1.7 2.5-2.9 2.8-4.1 1.1-83.7.7-83.7-.5 0-.5-.4-.8-.9-.4-2.8 1.7-3.1-5.1-3.1-72.2 0-80.2 0-79.3-7.7-87.1-5.7-5.7-8.3-6.9-18.2-8.1-5.7-.7-8.5-.6-13 .6-3.1.8-6.7 1.8-7.9 2.1-1.3.2-3.8 1.8-5.5 3.3-1.7 1.6-3.4 2.9-3.8 2.9-.3 0-1.9 2.8-3.5 6.2l-2.9 6.3.1 155c0 135.6.4 168.9 1.9 182 .5 4 3 14.4 4.3 17.5.5 1.4 1 2.8 1 3.3.4 5.3 13.7 31.2 21.9 42.7 5.8 8.1 28.5 32 30.4 32 .5 0 .9.4.9.9s.8 1.2 1.8 1.5c.9.3 3.1 1.9 4.9 3.6 1.8 1.6 3.5 3 3.8 3 .4 0 2.1 1.1 3.9 2.5 1.8 1.4 3.8 2.5 4.4 2.5.7 0 1.2.5 1.2 1.2 0 .6.3.8.7.5.3-.4 2.1.5 4 1.9 1.8 1.4 3.7 2.3 4.2 2 .5-.3 1.4.1 2.1.8.6.8 2.5 1.8 4.1 2.1 1.6.4 2.9 1.1 2.9 1.6 0 .6.4.8.9.4.5-.3 1.2-.1 1.6.5.3.5 1.2 1 2 1s2.6.5 4.2 1.2c1.5.6 3.4 1 4.1.9.6-.1 1.2.4 1.2 1 0 .7.3 1 .6.7.3-.3 3.1.1 6.2.9 6.2 1.6 7.4 1.9 14.2 2.8 2.5.3 5.9.8 7.5 1 6.1.9 110.1.5 113.3-.4 1.8-.6 3.4-.9 3.5-.8.6.4 5.3-4 6.4-6 2.2-4 3.2-13.9 3.1-32.1-.1-17.8 0-18.4 2.3-20.8l2.3-2.4 227.7.2 227.7.3 2.7 3 2.6 3-.5 19c-.2 10.4 0 21.2.5 24 1.3 6.7 5.5 11.1 12.3 12.6 7.3 1.6 137.7.7 142.6-.9 1.9-.7 6.9-1.9 11-2.8 4.1-.8 8.6-1.9 10-2.3 1.4-.5 5.1-1.7 8.2-2.6 3.2-.9 6-2 6.3-2.5.3-.4 2.1-1.1 4-1.4 1.9-.4 3.5-1.1 3.5-1.7 0-.6.5-.7 1-.4.6.3 1 .2 1-.4 0-.9 2.2-2 4.5-2.2.6 0 1.4-.7 1.8-1.5.4-.8 1.4-1.4 2.1-1.4.8 0 1.9-.7 2.6-1.5.7-.8 1.6-1.2 2.1-.9.5.3.9.1.9-.5 0-.5 1.7-2 3.8-3.2 2-1.3 4.3-2.9 5-3.6.8-.7 2.3-1.8 3.5-2.5 2.8-1.4 14.1-11 14.6-12.3.2-.6 2.1-2.7 4.3-4.9 2.1-2.1 5.1-5.6 6.6-7.7 1.6-2.1 3.1-3.6 3.4-3.3.3.3.8-.7 1.2-2.1.4-1.4 1.1-2.5 1.6-2.5.6 0 1-.7 1-1.5 0-.9.7-1.8 1.5-2.1.8-.4 1.5-1.3 1.5-2 0-.8.7-1.7 1.5-2 .8-.4 1.3-1 1-1.4-.3-.5.2-1.5 1-2.3.8-.9 1.5-2 1.5-2.4 0-.5.9-1.9 2-3.1 1.2-1.2 1.9-2.2 1.6-2.2-.3 0 1.1-3.1 3-7 1.8-3.8 3.4-7.1 3.4-7.4 0-.2 1-2.6 2.1-5.3 1.2-2.6 2.3-6.2 2.5-7.8.2-1.7.8-3.9 1.3-5 .6-1.1 1.7-5.8 2.5-10.5.9-4.7 1.9-9.9 2.3-11.5 1.2-4.8 1.2-321.8.1-327.3-.6-2.6-1.6-5.4-2.3-6.2-.8-.8-1.5-2.1-1.7-2.9-.4-1.6-8.1-9.8-8.9-9.4-.3.1-1.6-.7-2.7-1.8-1.2-1.1-2.2-1.8-2.2-1.5 0 .3-1.9-.1-4.3-.8-6.7-2-18.3-.8-24.8 2.6-3.2 1.7-8 5.8-9.7 8.4-4.4 6.8-4.7 8.3-5 29.5l-.3 20.6-2.6 1.4c-2.1 1.1-12 1.4-53.9 1.4-50 0-51.4-.1-53.3-2-1.9-1.9-2-3.7-2.2-52.5-.1-27.8 0-51.5.4-52.7 1.2-4.6 6.5-10.2 10.2-10.8.6 0 1.7-.4 2.5-.8s33-.9 71.5-1.1c38.5-.2 70.6-.5 71.3-.6.6-.2 1.2-.8 1.2-1.3 0-.6.3-.7.7-.4.3.4 1.2.2 2-.4.7-.6 1.3-.9 1.3-.6 0 .2 1.8-1.2 3.9-3.2 2.2-2 5.1-6.1 6.5-9.1l2.6-5.5-.3-62c-.3-56.7-.6-64.8-2.1-67.3-.3-.5-.8-3.1-1.2-5.8-.3-2.7-1-5.4-1.4-5.9-.5-.6-1-2.4-1.3-4-.6-3.3-6.4-19.4-7.6-21-.4-.5-1.4-2.6-2.1-4.5-2.1-5.2-12.1-20.3-17.7-26.5-1-1.1-3.7-4.3-6-7.1-3.8-4.6-8.4-9.2-20.9-21-2.4-2.3-4.4-4-4.4-3.8 0 .2-2.4-1.4-5.2-3.6-5.7-4.3-32.1-17.8-36.4-18.6-1.5-.3-4-1.2-5.5-2-1.6-.8-2.9-1.3-2.9-1 0 .2-1.7 0-3.7-.5-2.1-.5-4.7-1.2-5.8-1.4-2.5-.7-14.9-2.6-19.5-3.1-3.6-.4-57-.3-65 .1-7.7.4-15.2 2.7-18.2 5.7-1.8 1.8-5 7.4-5.5 9.8-.2.8-.4 168-.4 371.5-.1 241.8-.4 371.1-1.1 373.2l-1 3.3h-23.1c-12.8 0-23.7-.4-24.2-.8-3.5-2.5-3.4.7-3.2-374.9.4-405.3.8-373.1-5.7-380.1-5.5-6-7.3-6.4-22.7-5.9-7.7.2-14.2 0-14.5-.5-.3-.4-1-.6-1.5-.3-.5.4-.9.5-1 .3-.1-.2-.3-19.4-.5-42.8s-.7-43.6-1.1-45c-.3-1.4-.7-3.6-.9-5-.6-6-5.3-19.7-10.3-29.8-6.3-12.8-17.6-26-30.5-35.5-2.8-2.1-5.9-4.5-6.8-5.2-1-.8-1.8-1.1-1.8-.7 0 .4-.4.1-.9-.6-.4-.7-1.4-1.5-2.2-1.6-2.4-.5-5.3-1.9-6.7-3.3-.7-.7-2-1.3-2.9-1.3-.8 0-2.7-.7-4.1-1.5-1.5-.8-5.2-2.2-8.2-3-5.3-1.6-6.9-1.9-15.5-3.2-4.4-.7-181.9-1.6-182.6-.9zm174.6 63c1.7.2 3 .4 3 .6 0 .1 1.3.4 3 .6 1.6.3 3.5 1 4.2 1.6.7.6 1.3.7 1.3.2 0-.5.4-.3.8.3.4.7 1.7 1.4 2.8 1.6 1.2.1 3.4 1.1 5 2.2 3.4 2.2 10.4 9.3 10.4 10.5 0 .5.6 1.5 1.3 2.2 1.7 1.9 4.8 7.5 4.6 8.5-.1.4.1 1.5.4 2.3 2.1 4.9 2.5 14 2.4 47.6-.1 24.3-.6 37.7-1.2 38.3-1.6 1.6-254.6 1.5-255.6 0-1.3-2.1-.4-82.8.9-84.1.7-.7 1.2-2 1.2-2.9 0-.9.7-2.2 1.5-2.9.8-.6 1.4-1.5 1.3-1.8-.2-2.2 1-3.9 7.8-10.7 4.3-4.1 8.9-7.8 10.3-8.2 1.4-.3 2.8-.9 3.1-1.3 1.6-2.2 14.2-4.9 23.5-5 5.4 0 10-.2 10.1-.3.4-.4 154.8.3 157.9.7zm287 177c1.1.2 3.2.9 4.8 1.5 1.5.6 2.7.8 2.7.5 0-.3.5-.2 1.2.2s2.4.9 3.8 1.1c1.5.1 4 .9 5.6 1.8 1.6.8 3.5 1.5 4.2 1.5.6 0 1.2.4 1.2.9 0 .8 3.7 2.4 5.3 2.2.4-.1.7.3.7.7 0 .5 1.6 1.4 3.5 2.2 1.9.8 3.5 1.7 3.5 2.1 0 .4.8 1 1.8 1.3 3.3 1.2 6.7 3.6 6.4 4.6-.1.5.1.9.5.8.8-.3 5 3 8.2 6.3 3.9 3.9 12 13.5 12 14.1.1.5 1 1.7 2.1 2.8 1.1 1.1 2 2.9 2 4s.4 2 .9 2 1.9 2.1 3.1 4.7c1.2 2.7 2.6 5.6 3.1 6.6s.7 2.2.4 2.7c-.4.6-.3 1 .2 1 1.4 0 4.5 11.6 5.3 20.2.4 4.6.6 21.6.5 38-.1 26-.4 29.8-1.8 31.3-1.5 1.5-6.5 1.6-54.6 1.3-46.4-.3-53.2-.5-54.6-1.9-1.4-1.3-1.6-9.2-1.6-67.5-.2-84.5-.4-77.9 2.4-80.5 1.2-1.2 1.6-1.9 1-1.5-.7.4-1.3.5-1.3.2 0-.6 5.3-3.6 9.5-5.2 2.8-1.2 13.2-1.1 18 0zM641 741.7l2.5 2.6-.1 73.1c0 55.8-.3 73.6-1.2 75.3l-1.3 2.3h-42.7c-41.6 0-42.9-.1-45-2-2.2-2-2.2-2.2-1.7-34.3.4-32.9 1.2-46.7 2.5-46.7.4 0 1-2.1 1.4-4.7.7-5.6 10.5-26.3 12.4-26.3.7 0 1.1-.4.8-.8-.3-.5.5-2.2 1.7-3.8 3.2-4.2 17.9-19.3 18.6-19.1.3.1 2.1-1.3 4-3 1.9-1.8 3.8-3 4.3-2.7.4.3.8.2.8-.3 0-1.4 6.5-5.3 8.8-5.3 1.2 0 2.2-.5 2.2-1 0-.6.3-.9.8-.8.4.1 2.1-.4 3.7-1.1 1.7-.7 3.9-1.5 5-1.6 1.1-.2 3.6-.8 5.5-1.4 1.9-.5 6-.9 9-1 4.7-.1 5.9.3 8 2.6zm804.5 399.9c1.3 1 2.6 2.8 3 4.1.7 3.1.7 181.8-.1 198.8-.3 7.1-.8 13.7-1.1 14.5-.3.8-.7 2.2-.8 3-1.8 9.7-9.1 27.9-11.6 28.8-.5.2-.7.8-.3 1.3.3.5.1.9-.4.9-.4 0-1.9 2-3.1 4.5-1.2 2.5-2.7 4.5-3.2 4.5s-.9.7-.9 1.5-.7 1.5-1.6 1.5c-.8 0-1.3.4-1 .8.6.9-11.7 13.2-17.9 17.9-6.3 4.8-18 10.5-29.5 14.4-4.8 1.6-9.5 2.2-18 2.5-14 .3-20.5-1.2-22.1-5.3-1.6-4.1-1.6-283.9 0-287.8 1.7-4.1 4.4-6.4 8.6-7.3 2-.4 24.7-.6 50.6-.6 43.7.1 47.1.3 49.4 2zm-810.8 103.5c2.6.5 5.9 3.8 7.5 7.6 1.5 3.7 1.3 183.6-.3 186.5-.5 1-1.4 1.6-1.9 1.3-.5-.3-1.1-.1-1.5.5-.4.6-1 .8-1.4.6-.4-.3-4.1-.8-8.1-1.1-6.8-.6-17-3.8-17.8-5.7-.2-.4-1-.8-1.8-.8-4.4 0-19.6-10.8-27.3-19.4-1.4-1.5-4.5-4.9-6.8-7.3-2.4-2.5-4.3-4.9-4.3-5.3 0-.5-1.1-2.2-2.5-3.8-2.7-3.2-11.6-19.6-11.4-20.9.1-.4 0-1.5-.4-2.3-.3-.8-1.5-5.3-2.6-10-1.9-8.1-2-11.8-2-61-.1-40.4.2-52.9 1.2-54.1.7-.9 2.9-2.5 5-3.6 3.5-1.9 5.3-2 38.9-1.8 19.4.2 36.3.5 37.5.6z" />
  </Svg>
)
export default Travel