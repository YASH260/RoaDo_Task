import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function DashboardPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Yash's Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50">
        <div className="flex md:flex-col justify-center items-start">
          <Sidebar
            width="66px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="flex flex-col h-screen gap-[27px] top-0 p-4 md:p-5 bg-white-A700 shadow-xs !sticky overflow-auto md:hidden"
          >
            <Img src="images/img_settings.svg" alt="settings_one" className="h-[29px] mt-2" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "48.00px" } }}
              className="flex flex-col items-center justify-center w-full mb-[164px]"
            >
              <MenuItem
                icon={<Img src="images/img_dashboard_fill0.svg" alt="dashboardfillze" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_add_to_queue_fi.svg" alt="addtoqueuefi" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_label_important.svg" alt="labelimportant" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_assignment_fill.svg" alt="assignmentfill" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_vector.svg" alt="vector_one" className="h-[20px] w-full md:h-auto" />}
              />
              <MenuItem
                icon={<Img src="images/img_local_shipping.svg" alt="localshipping" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_parcel_tracking.svg" alt="parceltracking" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_business_center.svg" alt="businesscenter" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_account_balance.svg" alt="accountbalance" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_dynamic_feed_fi.svg" alt="dynamicfeedfi" className="h-[24px] w-[24px]" />}
              />
              <MenuItem
                icon={<Img src="images/img_settings_fill0.svg" alt="settingsfillzer" className="h-[24px] w-[24px]" />}
              />
            </Menu>
          </Sidebar>
          <div className="flex flex-col self-start items-start md:self-stretch mt-5 ml-5 md:p-5 md:ml-0 flex-1">
            <header className="flex self-stretch justify-between items-center gap-5">
              <div className="flex">
                <div className="flex">
                  <Text size="xl" as="p" className="!font-montserrat">
                    Dashboard
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-3 p-1.5 bg-white-A700 shadow-xs rounded-[16px]">
                <Img src="images/img_search.svg" alt="search_one" className="h-[20px] w-[20px]" />
                <div className="h-[16px] w-px bg-gray-400" />
                <Img src="images/img_occasionaly_used.svg" alt="occasionaly_one" className="h-[20px] w-[20px]" />
                <div className="h-[16px] w-px bg-gray-400" />
                <Img src="images/img_regular_used_icons.svg" alt="regularused_one" className="h-[20px] w-[20px]" />
              </div>
            </header>
            <div className="flex md:flex-col self-stretch mt-4 gap-3">
              <div className="flex flex-col justify-center w-full p-[11px] bg-white-A700 shadow-xs rounded-[12px]">
                <div className="flex flex-col items-center mb-0.5">
                  <Text size="md" as="p" className="self-start">
                    Orders
                  </Text>
                  <div className="h-[110px] w-[110px] mt-[9px] relative">
                    {/* First segment - 50% - #4FD2B5 */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={100}
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the first segment
                          stroke: '#4FD2B5',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    {/* Second segment - 30% - #FFCB49 */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={60} // Since it's the second layer, it should be double the percentage to appear as 30%
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the second segment
                          stroke: '#FFCB49',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    {/* Third segment - 20% - #7464FF */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={40} // Since it's the top layer, it should be double the percentage to appear as 20%
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the third segment
                          stroke: '#7464FF',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <div className="flex flex-col items-center h-max w-max gap-[3px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Text as="p" className="!text-gray-700">
                        Total
                      </Text>
                      <Text as="p" className="!font-medium">
                        123456
                      </Text>
                    </div>
                  </div>

                  <div className="flex self-stretch justify-between mt-4 gap-5 bg-gradient flex-wrap rounded">
                    <Text as="p" className="self-end">
                      Upcoming
                    </Text>
                    <Text as="p" className="self-start h-[15px] mr-2">
                      50
                    </Text>
                  </div>
                  <div className="flex self-stretch justify-between mt-2 gap-5 bg-gradient1 flex-wrap rounded">
                    <Text as="p" className="self-end">
                      Ongoing
                    </Text>
                    <Text as="p" className="self-start mr-2">
                      100
                    </Text>
                  </div>
                  <div className="flex self-stretch justify-between mt-2 gap-5 bg-gradient2 flex-wrap rounded">
                    <Text as="p" className="self-end">
                      Completed
                    </Text>
                    <Text as="p" className="self-start h-[15px] mr-2">
                      50
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-2 p-3 bg-white-A700 shadow-xs rounded-[12px]">
                <Text size="md" as="p" className="ml-1 md:ml-0">
                  Trips
                </Text>
                <div className="self-stretch">
                  <div className="flex flex-col items-center">
                  <div className="h-[110px] w-[110px] mt-[9px] relative">
                    {/* First segment - 50% - #4FD2B5 */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={100}
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the first segment
                          stroke: '#4FD2B5',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    {/* Second segment - 30% - #FFCB49 */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={60} // Since it's the second layer, it should be double the percentage to appear as 30%
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the second segment
                          stroke: '#FFCB49',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    {/* Third segment - 20% - #7464FF */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={40} // Since it's the top layer, it should be double the percentage to appear as 20%
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the third segment
                          stroke: '#7464FF',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <div className="flex flex-col items-center h-max w-max gap-[3px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Text as="p" className="!text-gray-700">
                        Total
                      </Text>
                      <Text as="p" className="!font-medium">
                        123456
                      </Text>
                    </div>
                  </div>

                    <div className="flex self-stretch justify-between mt-4 gap-5 bg-gradient flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Upcoming
                      </Text>
                      <Text as="p" className="self-start h-[15px] mr-2">
                        50
                      </Text>
                    </div>
                    <div className="flex self-stretch justify-between mt-2 gap-5 bg-gradient1 flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Ongoing
                      </Text>
                      <Text as="p" className="self-start mr-2">
                        100
                      </Text>
                    </div>
                    <div className="flex self-stretch justify-between mt-2 gap-5 bg-gradient2 flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Completed
                      </Text>
                      <Text as="p" className="self-start h-[15px] mr-2">
                        50
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-[9px] p-[11px] bg-white-A700 shadow-xs rounded-[12px]">
                <Text size="md" as="p" className="ml-1 md:ml-0">
                  Revenue
                </Text>
                <div className="self-stretch mb-0.5">
                  <div className="flex flex-col items-center">
                  <div className="h-[110px] w-[110px] mt-[9px] relative">
                {/* First segment - 50% - #4FD2B5 */}
                <CircularProgressbar
                  strokeWidth={15}
                  value={100}
                  styles={{
                    trail: {
                      // Invisible trail
                      stroke: 'transparent'
                    },
                    path: {
                      // Color for the first segment
                      stroke: '#4FD2B5',
                      strokeLinecap: 'butt'
                    }
                  }}
                  className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                {/* Second segment - 30% - #FFCB49 */}
                <CircularProgressbar
                  strokeWidth={15}
                  value={60} // Since it's the second layer, it should be double the percentage to appear as 30%
                  styles={{
                    trail: {
                      // Invisible trail
                      stroke: 'transparent'
                    },
                    path: {
                      // Color for the second segment
                      stroke: '#FFCB49',
                      strokeLinecap: 'butt'
                    }
                  }}
                  className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                {/* Third segment - 20% - #7464FF */}
                <CircularProgressbar
                  strokeWidth={15}
                  value={40} // Since it's the top layer, it should be double the percentage to appear as 20%
                  styles={{
                    trail: {
                      // Invisible trail
                      stroke: 'transparent'
                    },
                    path: {
                      // Color for the third segment
                      stroke: '#7464FF',
                      strokeLinecap: 'butt'
                    }
                  }}
                  className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <div className="flex flex-col items-center h-max w-max gap-[3px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Text as="p" className="!text-gray-700">
                    Total
                  </Text>
                  <Text as="p" className="!font-medium">
                    123456
                  </Text>
                </div>
              </div>

                    <div className="flex self-stretch justify-between mt-4 gap-5 bg-gradient flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Upcoming
                      </Text>
                      <Text as="p" className="self-start h-[15px] mr-2">
                        50
                      </Text>
                    </div>
                    <div className="flex self-stretch justify-between mt-2 gap-5 bg-gradient1 flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Ongoing
                      </Text>
                      <Text as="p" className="self-start mr-2">
                        100
                      </Text>
                    </div>
                    <div className="flex self-stretch justify-between mt-2 gap-5 bg-gradient2 flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Completed
                      </Text>
                      <Text as="p" className="self-start h-[15px] mr-2">
                        50
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-2 p-3 bg-white-A700 shadow-xs rounded-[12px]">
                <Text size="md" as="p" className="ml-1 md:ml-0">
                  Expences
                </Text>
                <div className="self-stretch">
                  <div className="flex flex-col items-center">
                  <div className="h-[110px] w-[110px] mt-[9px] relative">
                    {/* First segment - 50% - #4FD2B5 */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={100}
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the first segment
                          stroke: '#4FD2B5',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    {/* Second segment - 30% - #FFCB49 */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={60} // Since it's the second layer, it should be double the percentage to appear as 30%
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the second segment
                          stroke: '#FFCB49',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    {/* Third segment - 20% - #7464FF */}
                    <CircularProgressbar
                      strokeWidth={15}
                      value={40} // Since it's the top layer, it should be double the percentage to appear as 20%
                      styles={{
                        trail: {
                          // Invisible trail
                          stroke: 'transparent'
                        },
                        path: {
                          // Color for the third segment
                          stroke: '#7464FF',
                          strokeLinecap: 'butt'
                        }
                      }}
                      className="h-[110px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <div className="flex flex-col items-center h-max w-max gap-[3px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Text as="p" className="!text-gray-700">
                        Total
                      </Text>
                      <Text as="p" className="!font-medium">
                        123456
                      </Text>
                    </div>
                  </div>

                    <div className="flex self-stretch justify-between mt-4 gap-5 bg-gradient flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Freight Charge
                      </Text>
                      <Text as="p" className="self-start h-[15px] mr-2">
                        50
                      </Text>
                    </div>
                    <div className="flex self-stretch justify-between mt-2 gap-5 bg-gradient1 flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Driver Charge
                      </Text>
                      <Text as="p" className="self-start mr-2">
                        100
                      </Text>
                    </div>
                    <div className="flex self-stretch justify-between mt-2 gap-5 bg-gradient2 flex-wrap rounded">
                      <Text as="p" className="self-end">
                        Other Charges
                      </Text>
                      <Text as="p" className="self-start h-[15px] mr-2">
                        50
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text size="lg" as="p" className="mt-6">
              Quick Actions
            </Text>
            <div className="flex self-stretch justify-between mt-[13px] gap-5 p-[15px] bg-white-A700 shadow-xs rounded-[16px]" style={divStyle} >
              <div>
                <div className="flex flex-col items-center gap-[7px]">
                  <Img src="images/img_fleet_icons.svg" alt="fleeticons_one" className="h-[20px] w-[20px]" />
                  <Text as="p" className="!font-medium">
                    Create Indents
                  </Text>
                </div>
              </div>
              <div className="flex border-gray-400 border-l-[0.5px] border-solid"></div>
              <div>
                <div className="flex flex-col items-center gap-[7px]">
                  <Img src="images/img_regular_used_icons_black_900.svg" alt="rvhookupfillzer" className="h-[20px] w-[20px]" />
                  <Text as="p" className="text-center !font-medium">
                    Add Vehicle
                  </Text>
                </div>
              </div>
              <div className="flex border-gray-400 border-l-[0.5px] border-solid"></div>

              <div>
                <div className="flex flex-col items-center gap-[7px]">
                  <Img src="images/img_rv_hookup_fill0.svg" alt="rvhookupfillzer" className="h-[20px] w-[20px]" />
                  <Text as="p" className="text-center !font-medium">
                    Add Trailer
                  </Text>
                </div>
              </div>
              <div className="flex border-gray-400 border-l-[0.5px] border-solid"></div>

              <div>
                <div className="flex flex-col items-center gap-[7px]">
                  <Img src="images/img_regular_used_icons_black_900_20x20.svg" alt="rvhookupfillzer" className="h-[20px] w-[20px]" />
                  <Text as="p" className="text-center !font-medium">
                    Add Driver
                  </Text>
                </div>
              </div>
              <div className="flex border-gray-400 border-l-[0.5px] border-solid"></div>
              <div>
                <div className="flex flex-col items-center gap-[7px]">
                  <Img
                    src="images/img_regular_used_icons_black_900.svg"
                    alt="regularused"
                    className="h-[20px] w-[20px]"
                  />
                  <Text as="p" className="!font-medium">
                    Add Indents
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex self-stretch justify-between items-center mt-6 gap-5">
              <Text size="lg" as="p">
                High Priority alerts (14)
              </Text>
              <div className="flex items-center gap-[5px]">
                <a href="#">
                  <Text size="md" as="p" className="!text-indigo-900">
                    View All
                  </Text>
                </a>
                <div className="flex flex-col">
                  <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[20px]" />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col self-stretch mt-[13px] gap-[52px]">
              <div className="flex justify-center w-full p-[11px] bg-white-A700 shadow-xs rounded-[16px]">
                <div className="flex flex-col items-end w-full gap-[13px]">
                  <div className="flex self-stretch justify-end gap-2">
                    <Button color="blue_50" size="sm" shape="round" className="w-[32px]">
                      <Img src="images/img_regular_used_icons_black_900_20x20.svg" />
                    </Button>
                    <div className="flex flex-col gap-[3px] flex-1">
                      <div className="flex justify-between items-center gap-5 flex-wrap">
                        <Text size="md" as="p" className="!text-gray-900 !font-medium">
                          Driver Raised Concern
                        </Text>
                        <Text as="p" className="self-start !text-gray-900">
                          13 Fab 24
                        </Text>
                      </div>
                      <div className="flex">
                        <div className="flex gap-2 flex-wrap">
                          <Text size="xs" as="p" className="!text-gray-900">
                            Load No : 12454,
                          </Text>
                          <Text size="xs" as="p" className="!text-gray-900">
                            Bill To : RoaDo demo Bangalore
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 leading-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore
                    et dolore magna aliqua
                  </Text>
                  <div className="flex justify-between items-center w-[46%] md:w-full gap-5">
                    <Text size="md" as="p" className="self-end mb-[5px] !text-indigo-900 underline">
                      Ignore
                    </Text>
                    <Button shape="round" className="min-w-[73px]">
                      Resolve
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full p-3 bg-white-A700 shadow-xs rounded-[16px]">
                <div className="flex flex-col items-end w-full gap-[13px]">
                  <div className="flex self-stretch justify-end gap-2">
                    <Button color="blue_50" size="sm" shape="round" className="w-[32px]">
                      <Img src="images/img_laptop.svg" />
                    </Button>
                    <div className="flex flex-col gap-0.5 flex-1">
                      <div className="flex justify-between items-center gap-5 flex-wrap">
                        <Text size="md" as="p" className="!text-gray-900 !font-medium">
                          Reefer Temp. out of range
                        </Text>
                        <Text as="p" className="self-start !text-gray-900">
                          13 Fab 24
                        </Text>
                      </div>
                      <div className="flex">
                        <div className="flex gap-2 flex-wrap">
                          <Text size="xs" as="p" className="!text-gray-900">
                            Load No : 12454,
                          </Text>
                          <Text size="xs" as="p" className="!text-gray-900">
                            Bill To : RoaDo demo Bangalore
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 leading-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore
                    et dolore magna aliqua
                  </Text>
                  <div className="flex justify-between items-center w-[47%] md:w-full gap-5">
                    <Text size="md" as="p" className="self-end mb-[5px] !text-indigo-900 underline">
                      Ignore
                    </Text>
                    <Button shape="round" className="min-w-[73px]">
                      Resolve
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-[29%] md:w-full ml-2.5 p-4 md:p-5 md:ml-0 bg-white-A700 shadow-xs">
            <Text size="lg" as="p" className="mt-2">
              Todays Highlights (14)
            </Text>
            <Text as="p" className="mt-1 !text-gray-700">
              19 Mar 2024
            </Text>
            <div className="self-stretch mt-[13px] mb-[5px]">
              <div>
                <div className="flex md:flex-row gap-[18px]">
                  <div className="flex flex-col items-start w-full gap-[5px] p-2.5 border-gray-400 border border-solid bg-white-A700 rounded">
                    <Text as="p" className="!text-gray-700 !font-medium">
                      Income
                    </Text>
                    <Text size="lg" as="p" className="!text-green-800">
                      100000 CAD
                    </Text>
                    <Text as="p" className="!text-gray-700">
                      2 payments received
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-[5px] p-2.5 border-gray-400 border border-solid bg-white-A700 rounded">
                    <Text as="p" className="!text-gray-700 !font-medium">
                      Expenses
                    </Text>
                    <Text size="lg" as="p" className="!text-red-600">
                      50000 CAD
                    </Text>
                    <Text as="p" className="!text-gray-700">
                      5 payments paid
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 gap-5 flex-wrap">
                  <Text size="md" as="p" className="!font-medium">
                    Completed Activities (14)
                  </Text>
                  <a href="#" className="self-start">
                    <Text as="p" className="!text-gray-900 underline">
                      View All
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col mt-3 gap-7 p-3 border-gray-400 border border-solid bg-white-A700 rounded">
                <Text />

                 <Text as="p" className="!text-gray-700 leading-4">
                    <span className="text-indigo-900">Gurpreet Singh</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-gray-700">&nbsp;(Dispatch team) has created&nbsp;</span>
                    <span className="text-black-900">Load No. I-I-AAA-1325</span>
                  </Text>
                  <div className="w-full h-px bg-gray-400" />
                  <Text as="p" className="!text-gray-700 leading-4">
                    <span className="text-indigo-900">Aman</span>
                    <span className="text-gray-700">&nbsp;</span>
                    <span className="text-gray-700">(Driver)&nbsp;</span>
                    <span className="text-gray-900">Picked Up</span>
                    <span className="text-gray-700">&nbsp;goods at&nbsp;</span>
                    <span className="text-gray-900">Location_Name</span>
                    <span className="text-gray-700">&nbsp;for&nbsp;</span>
                    <span className="text-black-900">Load No. I-I-AAA-1325</span>
                  </Text>
                  <div className="w-full h-px bg-gray-400" />
                  <Text as="p" className="!text-gray-700 leading-4">
                    <span className="text-indigo-900">Gurpreet Singh</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-gray-700">&nbsp;(Dispatch team) has created&nbsp;</span>
                    <span className="text-black-900">Load No. I-I-AAA-1325</span>
                  </Text>
                  <div className="w-full h-px bg-gray-400" />
                  <Text as="p">
                    <span className="text-black-900">Load No. I-I-AAA-1325&nbsp;</span>
                    <span className="text-gray-700">will</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-gray-700">start added by&nbsp;</span>
                    <span className="text-indigo-900">Gurpreet Singh</span>
                  </Text>
                  <Text />
                </div>
                <div className="flex justify-between items-center mt-6 gap-5 flex-wrap">
                  <Text size="md" as="p" className="!font-medium">
                    Scheduled Activities (14)
                  </Text>
                  <a href="#" className="self-start">
                    <Text as="p" className="!text-gray-900 underline">
                      View All
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col mt-3 gap-[27px] p-3 border-gray-400 border border-solid bg-white-A700 rounded">
                  <Text className="mt-[3px] md:mt-0" />
                  <div className="w-full h-px bg-gray-400" />
                  <Text as="p" className="!text-gray-700 leading-4">
                    <span className="text-indigo-900">Aman</span>
                    <span className="text-gray-700">&nbsp;</span>
                    <span className="text-gray-700">(Driver) will&nbsp;</span>
                    <span className="text-gray-900">Picked Up</span>
                    <span className="text-gray-700">&nbsp;goods at&nbsp;</span>
                    <span className="text-gray-900">Location_Name</span>
                    <span className="text-gray-700">&nbsp;for&nbsp;</span>
                    <span className="text-black-900">Load No. I-I-AAA-1325</span>
                  </Text>
                  <div className="w-full h-px bg-gray-400" />
                  <Text as="p">
                    <span className="text-black-900">Load No. I-I-AAA-1325&nbsp;</span>
                    <span className="text-gray-700">will</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-gray-700">start added by&nbsp;</span>
                    <span className="text-indigo-900">Gurpreet Singh</span>
                  </Text>
                  <div className="w-full h-px bg-gray-400" />
                  <Text />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const divStyle = {

  paddingLeft: '50px',

  paddingRight: '50px',
}