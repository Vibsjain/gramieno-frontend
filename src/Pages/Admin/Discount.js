import React, { useState, useEffect } from "react";
import api from "../../api";
import swal from "sweetalert";

const Discount = () => {
    const [data, setData] = useState([]);
    const [woodDiscount, setWoodDiscount] = useState(10);
    const [incenseDiscount, setIncenseDiscount] = useState(10);
    const [roseDiscount, setRoseDiscount] = useState(10);
    const [woodEdit, setWoodEdit] = useState(false);
    const [incenseEdit, setIncenseEdit] = useState(false);
    const [roseEdit, setRoseEdit] = useState(false);
    const [changed, setChanged] = useState(false);
    const getData = async () => {
        await api
            .get("/discounts")
            .then((res) => {
                console.log(res.data[0]);
                setData(res.data);
                setWoodDiscount(res.data[0].discountPercent);
                setIncenseDiscount(res.data[1].discountPercent);
                setRoseDiscount(res.data[2].discountPercent);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const changeDiscount = async (id, discount) => {
        await api.put(`/discounts/${id}`, {
            discountPercent: discount,
        });
    };

    const toggleActive = async (id) => {
        await api.put(`/toggle/discounts/${id}`);
    };

    useEffect(() => {
        getData();
    }, [changed]);
    return (
        <div className="w-full sm:px-24 px-4 mt-24 about-font">
            <div className="bg-[#141C2F] rounded-2xl min-h-[70vh]">
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
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data[0] && (
                                    <tr className="bg-[#1E293B] text-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            <div
                                                className={`cursor-pointer w-4 h-4 rounded-full bg-[#${
                                                    data[0].active === true
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
                                                <p>{woodDiscount}%</p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={woodDiscount}
                                                    onChange={(e) => {
                                                        setWoodDiscount(
                                                            e.target.value
                                                        );
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
                                                                            woodDiscount
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
                                    <tr className="bg-[#1E293B] text-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            <div
                                                className={`cursor-pointer w-4 h-4 rounded-full bg-[#${
                                                    data[1].active === true
                                                        ? "008000"
                                                        : "FF0000"
                                                }]`}
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
                                                <p>{incenseDiscount}%</p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={incenseDiscount}
                                                    onChange={(e) => {
                                                        setIncenseDiscount(
                                                            e.target.value
                                                        );
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
                                                                            incenseDiscount
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
                                    <tr className="bg-[#1E293B] text-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            <div
                                                className={`cursor-pointer w-4 h-4 rounded-full bg-[#${
                                                    data[2].active === true
                                                        ? "008000"
                                                        : "FF0000"
                                                }]`}
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
                                                <p>{roseDiscount}%</p>
                                            ) : (
                                                <input
                                                    type="text"
                                                    className="w-20 px-2 py-1 rounded-md text-black"
                                                    value={roseDiscount}
                                                    onChange={(e) => {
                                                        setRoseDiscount(
                                                            e.target.value
                                                        );
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
                                                                            roseEdit
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
