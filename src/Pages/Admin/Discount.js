import React, { useState, useEffect } from "react";
import api from "../../api";
import swal from "sweetalert";

const Discount = () => {
    const [data, setData] = useState([]);
    const [woodData, setWoodData] = useState({
        discountPercent: 0,
        minPurchase: 0,
        active: false,
    });
    const [incenseData, setIncenseData] = useState({
        discountPercent: 0,
        minPurchase: 0,
        active: false,
    });
    const [roseData, setRoseData] = useState({
        discountPercent: 0,
        minPurchase: 0,
        active: false,
    });
    const [woodEdit, setWoodEdit] = useState(false);
    const [incenseEdit, setIncenseEdit] = useState(false);
    const [roseEdit, setRoseEdit] = useState(false);
    const [changed, setChanged] = useState(false);
    const getData = async () => {
        await api
            .get("/discounts")
            .then((res) => {
                setData(res.data);
                setWoodData({
                    discountPercent: res.data[0].discountPercent,
                    minPurchase: res.data[0].minPurchase,
                    active: res.data[0].active,
                });
                setIncenseData({
                    discountPercent: res.data[1].discountPercent,
                    minPurchase: res.data[1].minPurchase,
                    active: res.data[1].active,
                });
                setRoseData({
                    discountPercent: res.data[2].discountPercent,
                    minPurchase: res.data[2].minPurchase,
                    active: res.data[2].active,
                });
            })
            .catch((err) => {});
    };
    const changeDiscount = async (id, editData) => {
        await api.put(`/discounts/${id}`, {
            discountPercent: editData.discountPercent,
            minPurchase: editData.minPurchase,
        });
    };

    const toggleActive = async (id) => {
        await api.put(`/discounts/toggle/${id}`);
        data[id].active = !data[id].active;
        setChanged(!changed);
    };

    useEffect(() => {
        getData();
    }, [changed]);
    return (
        <div className="w-full sm:px-24 px-4 mt-24 about-font">
            <div className="bg-[#937D64] rounded-2xl min-h-[70vh]">
                <div>
                    <h1 className="text-3xl text-white text-center pt-10">
                        Discount
                    </h1>
                </div>
                <div className="w-full px-8">
                    <h1 className="text-white">Current Discount </h1>
                    <br />
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-[rgb(16,22,36)] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Active Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Discount %
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Min. Purchase Amount (Rs.)
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data[0] && (
                                    <tr className="bg-[#B89C7D] text-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            <div
                                                className={`cursor-pointer w-4 h-4 rounded-full bg-[#${
                                                    woodData.active === true
                                                        ? "008000"
                                                        : "FF0000"
                                                }]`}
                                                onClick={() => {
                                                    swal({
                                                        title: "Are you sure you want to change the status?",
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((willDelete) => {
                                                        if (willDelete) {
                                                            toggleActive(0);
                                                            woodData.active =
                                                                !woodData.active;
                                                            swal(
                                                                "Status Changed",
                                                                {
                                                                    icon: "success",
                                                                }
                                                            );
                                                        } else {
                                                            swal(
                                                                "Status not changed"
                                                            );
                                                        }
                                                    });
                                                }}
                                            ></div>
                                        </td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium     whitespace-nowrap dark:text-white"
                                        >
                                            Wooden Works
                                        </th>
                                        <td className="px-6 py-4">
                                            {woodEdit === false ? (
                                                <p>
                                                    {woodData.discountPercent}%
                                                </p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={
                                                        woodData.discountPercent
                                                    }
                                                    onChange={(e) => {
                                                        setWoodData({
                                                            ...woodData,
                                                            discountPercent:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {woodEdit === false ? (
                                                <p>
                                                    ₹
                                                    {woodData.minPurchase.toLocaleString(
                                                        {
                                                            maximumFractionDigits: 2,
                                                            style: "currency",
                                                            currency: "INR",
                                                        }
                                                    )}
                                                </p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={woodData.minPurchase}
                                                    onChange={(e) => {
                                                        setWoodData({
                                                            ...woodData,
                                                            minPurchase:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {woodEdit === false ? (
                                                <button
                                                    className="bg-[#FBBF24] text-white px-4 py-2 rounded-md"
                                                    onClick={() => {
                                                        setWoodEdit(!woodEdit);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <button
                                                        className="bg-[#FF0000] text-white px-4 py-2 rounded-md"
                                                        onClick={() => {
                                                            swal({
                                                                title: "Are you sure?",
                                                                text: "Once deleted, you will not be able to recover the Changes!",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            }).then(
                                                                (
                                                                    willDelete
                                                                ) => {
                                                                    if (
                                                                        willDelete
                                                                    ) {
                                                                        swal(
                                                                            "Changes are not saved!",
                                                                            {
                                                                                icon: "success",
                                                                            }
                                                                        );
                                                                        setWoodEdit(
                                                                            !woodEdit
                                                                        );
                                                                    } else {
                                                                        swal(
                                                                            "Your Changes are safe!"
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="bg-[#008000] text-white px-4 py-2 rounded-md"
                                                        onClick={() => {
                                                            swal({
                                                                title: "Are you sure?",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            }).then(
                                                                (
                                                                    willDelete
                                                                ) => {
                                                                    if (
                                                                        willDelete
                                                                    ) {
                                                                        changeDiscount(
                                                                            0,
                                                                            woodData
                                                                        );
                                                                        swal({
                                                                            title: "Changes Saved!",
                                                                            icon: "success",
                                                                        });
                                                                        setWoodEdit(
                                                                            !woodEdit
                                                                        );
                                                                    } else {
                                                                        swal(
                                                                            "Your Changes are safe!"
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                )}
                                {data[1] && (
                                    <tr className="bg-[#B89C7D] text-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            <div
                                                className={`cursor-pointer w-4 h-4 rounded-full bg-[#${
                                                    incenseData.active === true
                                                        ? "008000"
                                                        : "FF0000"
                                                }]`}
                                                onClick={() => {
                                                    swal({
                                                        title: "Are you sure you want to change the status?",
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((willDelete) => {
                                                        if (willDelete) {
                                                            toggleActive(1);
                                                            incenseData.active =
                                                                !incenseData.active;
                                                            swal(
                                                                "Status Changed",
                                                                {
                                                                    icon: "success",
                                                                }
                                                            );
                                                        } else {
                                                            swal(
                                                                "Status not changed"
                                                            );
                                                        }
                                                    });
                                                }}
                                            ></div>
                                        </td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium     whitespace-nowrap dark:text-white"
                                        >
                                            Incense Sticks
                                        </th>
                                        <td className="px-6 py-4">
                                            {incenseEdit === false ? (
                                                <p>
                                                    {
                                                        incenseData.discountPercent
                                                    }
                                                    %
                                                </p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={
                                                        incenseData.discountPercent
                                                    }
                                                    onChange={(e) => {
                                                        setIncenseData({
                                                            ...incenseData,
                                                            discountPercent:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {incenseEdit === false ? (
                                                <p>
                                                    ₹
                                                    {incenseData.minPurchase.toLocaleString()}
                                                </p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={
                                                        incenseData.minPurchase
                                                    }
                                                    onChange={(e) => {
                                                        setIncenseData({
                                                            ...incenseData,
                                                            minPurchase:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {incenseEdit === false ? (
                                                <button
                                                    className="bg-[#FBBF24] text-white px-4 py-2 rounded-md"
                                                    onClick={() => {
                                                        setIncenseEdit(
                                                            !incenseEdit
                                                        );
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <button
                                                        className="bg-[#FF0000] text-white px-4 py-2 rounded-md"
                                                        onClick={() => {
                                                            swal({
                                                                title: "Are you sure?",
                                                                text: "Once deleted, you will not be able to recover the Changes!",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            }).then(
                                                                (
                                                                    willDelete
                                                                ) => {
                                                                    if (
                                                                        willDelete
                                                                    ) {
                                                                        swal(
                                                                            "Changes are not saved!",
                                                                            {
                                                                                icon: "success",
                                                                            }
                                                                        );
                                                                        setIncenseEdit(
                                                                            !incenseEdit
                                                                        );
                                                                    } else {
                                                                        swal(
                                                                            "Your Changes are safe!"
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="bg-[#008000] text-white px-4 py-2 rounded-md"
                                                        onClick={() => {
                                                            swal({
                                                                title: "Are you sure?",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            }).then(
                                                                (
                                                                    willDelete
                                                                ) => {
                                                                    if (
                                                                        willDelete
                                                                    ) {
                                                                        changeDiscount(
                                                                            1,
                                                                            incenseData
                                                                        );
                                                                        swal({
                                                                            title: "Changes Saved!",
                                                                            icon: "success",
                                                                        });
                                                                        setIncenseEdit(
                                                                            !incenseEdit
                                                                        );
                                                                    } else {
                                                                        swal(
                                                                            "Your Changes are safe!"
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                )}
                                {data[2] && (
                                    <tr className="bg-[#B89C7D] text-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            <div
                                                className={`cursor-pointer w-4 h-4 rounded-full bg-[#${
                                                    roseData.active === true
                                                        ? "008000"
                                                        : "FF0000"
                                                }]`}
                                                onClick={() => {
                                                    swal({
                                                        title: "Are you sure you want to change the status?",
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((willDelete) => {
                                                        if (willDelete) {
                                                            toggleActive(2);
                                                            roseData.active =
                                                                !roseData.active;
                                                            swal(
                                                                "Status Changed",
                                                                {
                                                                    icon: "success",
                                                                }
                                                            );
                                                        } else {
                                                            swal(
                                                                "Status not changed"
                                                            );
                                                        }
                                                    });
                                                }}
                                            ></div>
                                        </td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium     whitespace-nowrap dark:text-white"
                                        >
                                            Rose Pack
                                        </th>
                                        <td className="px-6 py-4">
                                            {roseEdit === false ? (
                                                <p>
                                                    {roseData.discountPercent}%
                                                </p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={
                                                        roseData.discountPercent
                                                    }
                                                    onChange={(e) => {
                                                        setRoseData({
                                                            ...roseData,
                                                            discountPercent:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {roseEdit === false ? (
                                                <p>₹{roseData.minPurchase}</p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={roseData.minPurchase}
                                                    onChange={(e) => {
                                                        setRoseData({
                                                            ...roseData,
                                                            minPurchase:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {roseEdit === false ? (
                                                <button
                                                    className="bg-[#FBBF24] text-white px-4 py-2 rounded-md"
                                                    onClick={() => {
                                                        setRoseEdit(!roseEdit);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <button
                                                        className="bg-[#FF0000] text-white px-4 py-2 rounded-md"
                                                        onClick={() => {
                                                            swal({
                                                                title: "Are you sure?",
                                                                text: "Once deleted, you will not be able to recover the Changes!",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            }).then(
                                                                (
                                                                    willDelete
                                                                ) => {
                                                                    if (
                                                                        willDelete
                                                                    ) {
                                                                        swal(
                                                                            "Changes are not saved!",
                                                                            {
                                                                                icon: "success",
                                                                            }
                                                                        );
                                                                        setRoseEdit(
                                                                            !roseEdit
                                                                        );
                                                                    } else {
                                                                        swal(
                                                                            "Your Changes are safe!"
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="bg-[#008000] text-white px-4 py-2 rounded-md"
                                                        onClick={() => {
                                                            swal({
                                                                title: "Are you sure?",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            }).then(
                                                                (
                                                                    willDelete
                                                                ) => {
                                                                    if (
                                                                        willDelete
                                                                    ) {
                                                                        changeDiscount(
                                                                            2,
                                                                            roseData
                                                                        );
                                                                        swal({
                                                                            title: "Changes Saved!",
                                                                            icon: "success",
                                                                        });
                                                                        setRoseEdit(
                                                                            !roseEdit
                                                                        );
                                                                    } else {
                                                                        swal(
                                                                            "Your Changes are safe!"
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
