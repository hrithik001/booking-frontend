const Perks = ({selected,onChange}) => {
    return (
        <>
        <label className="border p-4 rounded-2xl flex items-center text-center justify-center gap-2 cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>

                                <span>Free Wi-Fi</span>
                            </label>
                            <label className="border p-4 rounded-2xl flex items-center text-center justify-center gap-2 cursor-pointer">
                                <input type="checkbox" />

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 16 16" id="Car-Duotone--Streamline-Phosphor" height={16} width={16} ><desc>{"Car Duotone Streamline Icon: https://streamlinehq.com"}</desc><g id="car-duotone"><path id="Vector" fill="#c4c4c4" d="M10.930001953125 10.684998046875h2.449998046875v1.47c0 0.12997265624999998 -0.0516328125 0.254619140625 -0.1435078125 0.346494140625s-0.216521484375 0.1435078125 -0.346494140625 0.1435078125h-1.47c-0.12997265624999998 0 -0.25461328125 -0.0516328125 -0.34648828125000003 -0.1435078125s-0.1435078125 -0.216521484375 -0.1435078125 -0.346494140625v-1.47ZM1.6199999999999999 12.154998046875c0 0.12997265624999998 0.051626953125 0.254619140625 0.143513671875 0.346494140625 0.091892578125 0.091875 0.216533203125 0.1435078125 0.34648828125000003 0.1435078125h1.47c0.12994921875 0 0.25458984375 -0.0516328125 0.346482421875 -0.1435078125 0.09188671875 -0.091875 0.143513671875 -0.216521484375 0.143513671875 -0.346494140625v-1.47H1.6199999999999999v1.47Zm9.92923828125 -9.5090625c-0.038525390624999996 -0.08660156249999999 -0.10130859375000001 -0.160171875 -0.18075 -0.211810546875 -0.0795 -0.05164453125 -0.17223632812499998 -0.079125 -0.26698828125 -0.079125H3.8985000000000003c-0.09476953125 0 -0.18751171875 0.027480468749999997 -0.2669765625 0.079125 -0.079470703125 0.051638671875 -0.142259765625 0.125208984375 -0.18076171875 0.211810546875L1.6199999999999999 6.765000000000001h11.76l-1.83076171875 -4.119064453125Z" strokeWidth={1} /><path id="Vector_2" fill="#000" d="M14.359998046875 6.274998046875h-0.6615L11.9969765625 2.446875c-0.0769921875 -0.173197265625 -0.20255273437500002 -0.320349609375 -0.3615 -0.423626953125 -0.15894140625 -0.10327734375 -0.34440820312500003 -0.15825 -0.5339765625 -0.15825H3.8985000000000003c-0.189544921875 0 -0.3750234375 0.05497265625 -0.533958984375 0.15825 -0.158935546875 0.10327734375 -0.284513671875 0.2504296875 -0.361517578125 0.423626953125l-1.701521484375 3.8281230468749996H0.6400019531250001c-0.129955078125 0 -0.254595703125 0.051638671875 -0.34648828125000003 0.143513671875 -0.09188671875 0.091869140625 -0.143513671875 0.216515625 -0.143513671875 0.34648828125000003s0.051626953125 0.25461328125 0.143513671875 0.34648828125000003c0.091892578125 0.091875 0.216533203125 0.143513671875 0.34648828125000003 0.143513671875h0.48999609375000003v4.89999609375c0 0.25988671874999997 0.10325390625 0.509173828125 0.2870390625 0.692982421875 0.18378515625 0.18375 0.433048828125 0.287021484375 0.69296484375 0.287021484375h1.47c0.25991015625 0 0.509173828125 -0.103271484375 0.69296484375 -0.287021484375 0.18378515625 -0.18380859375 0.28703320312499997 -0.433095703125 0.28703320312499997 -0.692982421875V11.175h5.88v0.979998046875c0 0.25988671874999997 0.103265625 0.509173828125 0.287015625 0.692982421875 0.183814453125 0.18375 0.43310156250000004 0.287021484375 0.692982421875 0.287021484375h1.47c0.25988671874999997 0 0.509173828125 -0.103271484375 0.692982421875 -0.287021484375 0.18375 -0.18380859375 0.287021484375 -0.433095703125 0.287021484375 -0.692982421875v-4.89999609375h0.48999609375000003c0.12997265624999998 0 0.254619140625 -0.051638671875 0.346494140625 -0.143513671875s0.1435078125 -0.216515625 0.1435078125 -0.34648828125000003 -0.0516328125 -0.254619140625 -0.1435078125 -0.346494140625 -0.216521484375 -0.1435078125 -0.346494140625 -0.1435078125ZM3.8985000000000003 2.8450019531249997h7.203l1.524515625 3.4299960937500003H2.373990234375l1.524509765625 -3.4299960937500003Zm-0.318498046875 9.30999609375h-1.47V11.175h1.47v0.979998046875Zm7.839996093750001 0V11.175h1.47v0.979998046875h-1.47Zm1.47 -1.95999609375H2.110001953125v-2.94h10.77999609375v2.94ZM3.09 8.725001953125c0 -0.12997265624999998 0.051626953125 -0.254619140625 0.143513671875 -0.346494140625 0.091892578125 -0.091875 0.216533203125 -0.1435078125 0.34648828125000003 -0.1435078125H4.56c0.129955078125 0 0.25458984375 0.0516328125 0.346482421875 0.1435078125 0.091892578125 0.091875 0.14351953125 0.216521484375 0.14351953125 0.346494140625s-0.051626953125 0.25461328125 -0.14351953125 0.34648828125000003c-0.091892578125 0.091875 -0.21652734375 0.1435078125 -0.346482421875 0.1435078125H3.580001953125c-0.129955078125 0 -0.254595703125 -0.0516328125 -0.34648828125000003 -0.1435078125 -0.09188671875 -0.091875 -0.143513671875 -0.216515625 -0.143513671875 -0.34648828125000003Zm6.859998046875 0c0 -0.12997265624999998 0.051638671875 -0.254619140625 0.143513671875 -0.346494140625s0.216515625 -0.1435078125 0.34648828125000003 -0.1435078125h0.979998046875c0.12997265624999998 0 0.254619140625 0.0516328125 0.346494140625 0.1435078125s0.1435078125 0.216521484375 0.1435078125 0.346494140625 -0.0516328125 0.25461328125 -0.1435078125 0.34648828125000003 -0.216521484375 0.1435078125 -0.346494140625 0.1435078125H10.44c-0.12997265624999998 0 -0.25461328125 -0.0516328125 -0.34648828125000003 -0.1435078125s-0.143513671875 -0.216515625 -0.143513671875 -0.34648828125000003Z" strokeWidth={1} /></g></svg>

                                <span>Free Parking</span>
                            </label>
                            <label className="border p-4 rounded-2xl flex items-center text-center justify-center gap-2 cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                </svg>

                                <span>Pets allowed</span> 
                            </label>
                            <label className="border p-4 rounded-2xl flex items-center text-center justify-center gap-2 cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M19.5 6h-15v9h15V6Z" />
                                <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z" clipRule="evenodd" />
                                </svg>

                                <span>Tv</span>
                            </label>
                            <label className="border p-4 rounded-2xl flex items-center text-center justify-center gap-2 cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                </svg>

                                <span>Ac</span>
                            </label>
                            <label className="border p-4 rounded-2xl flex items-center text-center justify-center gap-2 cursor-pointer">
                                    <input type="checkbox" />
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                        </svg>
                            
                                <span>Non-Ac</span>
                            </label>
                            <label className="border p-4 rounded-2xl flex items-center text-center justify-center gap-2 cursor-pointer">
                                <input type="checkbox" />
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                            </svg>

                                <span>Private entrance</span>
                            </label></>
    );
}


export default Perks;