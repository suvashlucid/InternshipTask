import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../service/Instance";
import Button from "../../utils/themes/components/Button";
import Label from "../../utils/themes/components/Label";
import Placeholderr from "../../utils/themes/components/Placeholderr";
import Pagination from "./Pagination";

interface AdminListProps {}

interface Response {
  id: string;
  email: string;
  password: string;
  role: string;
  allowedFeature: string[] | null;
  username: string;
  details: {
    firstName: {
      en: string;
      ne: string;
    };
    lastName: {
      en: string;
      ne: string;
    };
    phoneNumber: string;
  };
}

const Adminlist: React.FC<AdminListProps> = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [admins, setAdmins] = useState<Response[]>([]);
  const [selectedAdminDetails, setSelectedAdminDetails] =
    useState<Response | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const fetchAdmins = async (page: number, perPage: number = 10) => {
    try {
      const response = await axios.get(`/admin`, {
        params: {
          page,
          perpage: perPage,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenstorage")}`,
        },
      });
      setAdmins(response.data.data?.data);
      setTotalPages(response.data.data?.totalPages);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  useEffect(() => {
    fetchAdmins(currentPage, rowsPerPage);
  }, [currentPage, rowsPerPage]);

  const deleteAdmin = async (id: string) => {
    try {
      await axios.delete(`/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenstorage")}`,
        },
      });
      const updatedAdmins = admins.filter((admin) => admin.id !== id);
      setAdmins(updatedAdmins);
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  const handleView = async (id: string) => {
    try {
      const response = await axios.get(`/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenstorage")}`,
        },
      });
      const adminDetails = response.data.data;
      setSelectedAdminDetails(adminDetails);
      setIsViewModalOpen(true);
      setIsEditMode(false); // Reset edit mode when viewing
      Object.keys(adminDetails).forEach((key) => {
        setValue(key, adminDetails[key]);
      });
    } catch (err) {
      console.error("Error fetching admin details:", err);
    }
  };

  const closeModal = () => {
    setIsViewModalOpen(false);
  };

  const onSubmit = async (data: any) => {
    try {
      const {
        id,
        role,
        allowedFeature,
        details: { firstName, lastName, phoneNumber },
      } = data;
      const updatedAdminData = {
        id,
        role,
        allowedFeature: ["SETUP"],
        firstName,
        lastName,
        phoneNumber,
      };
      await axios.patch(`/admin`, updatedAdminData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenstorage")}`,
        },
      });

      closeModal();
      toast.success("You have successfully updated the data. Please refresh.");
    } catch (error) {
      console.error("Error editing admin:", error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (perPage: number) => {
    setRowsPerPage(perPage);
  };

  return (
    <div style={{ width: "100%" }} className=" mt-10  px-5">
      <ToastContainer style={{ maxWidth: "15" }} />
      <div className="flex justify-between items-center mb-4">
        <div></div>
      </div>

      <table className="w-full text-sm text-center">
        <thead className="uppercase bg-slate-400">
          <tr>
            <th className="px-6 py-3">S.N</th>
            <th className="px-6 py-3">Username</th>
            <th className="px-6 py-3">First Name</th>
            <th className="px-6 py-3">Last Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">View</th>
            <th className="px-6 py-3">Delete</th>
          </tr>
        </thead>

        <tbody>
          {admins.map((item, index) => (
            <tr
              key={index}
              className=" odd:bg-slate-200  even:bg-black-500     "
            >
              <td className="px-6  py-8">{index + 1}</td>
              <td className="px-6 py-3">{item.username}</td>
              <td className="px-6 py-3">
                <Placeholderr value={item.details.firstName?.en} />
              </td>
              <td className="px-6 py-3">
                <Placeholderr value={item.details.lastName?.en} />
              </td>
              <td className="px-6 py-3">{item.email}</td>
              <td className="px-6 py-3">
                <Placeholderr value={item.role.toLowerCase()} />
              </td>
              <td className="px-4">
                <Button onClick={() => handleView(item.id)} text=" View More" />
              </td>
              <td className="px-4">
                <Button onClick={() => deleteAdmin(item.id)} text="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={handleRowsPerPageChange}
      />

      {isViewModalOpen && selectedAdminDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {isViewModalOpen && selectedAdminDetails && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg mt-8">
                <h2 className="text-xl font-bold mb-4">Admin Details</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="py-2 w-96">
                  <p className="py-3 ">
                    <Label value="First Name (EN):" />{" "}
                    {isEditMode ? (
                      <input
                        type="text"
                        style={{
                          color: "black",
                          backgroundColor: "lightgrey",
                          border: "red",
                        }}
                        {...register("details.firstName.en")}
                      />
                    ) : (
                      <Placeholderr
                        value={selectedAdminDetails.details.firstName.en}
                      />
                    )}
                  </p>
                  <p className="py-3">
                    <Label value="First Name (NE):" />{" "}
                    {isEditMode ? (
                      <input
                        style={{
                          color: "black",
                          backgroundColor: "lightgrey",
                          border: "red",
                        }}
                        type="text"
                        {...register("details.firstName.ne")}
                      />
                    ) : (
                      <Placeholderr
                        value={selectedAdminDetails.details.firstName.ne}
                      />
                    )}
                  </p>
                  <p className="py-3">
                    <Label value="Last Name (EN):" />{" "}
                    {isEditMode ? (
                      <input
                        type="text"
                        style={{
                          color: "black",
                          backgroundColor: "lightgrey",
                          border: "red",
                        }}
                        {...register("details.lastName.en")}
                      />
                    ) : (
                      <Placeholderr
                        value={selectedAdminDetails.details.lastName.en}
                      />
                    )}
                  </p>
                  <p className="py-3">
                    <Label value="Last Name (NE):" />{" "}
                    {isEditMode ? (
                      <input
                        type="text"
                        style={{
                          color: "black",
                          backgroundColor: "lightgrey",
                          border: "red",
                        }}
                        {...register("details.lastName.ne")}
                      />
                    ) : (
                      <Placeholderr
                        value={selectedAdminDetails.details.lastName.ne}
                      />
                    )}
                  </p>
                  <p className="py-3">
                    <Label value="Role:" />{" "}
                    {isEditMode ? (
                      <input
                        type="text"
                        style={{
                          color: "black",
                          backgroundColor: "lightgrey",
                          border: "red",
                        }}
                        {...register("role")}
                      />
                    ) : (
                      <Placeholderr value={selectedAdminDetails.role} />
                    )}
                  </p>
                  <p className="py-3">
                    <Label value="Phone Number:" />{" "}
                    {isEditMode ? (
                      <input
                        type="text"
                        style={{
                          color: "black",
                          backgroundColor: "lightgrey",
                          border: "red",
                        }}
                        {...register("details.phoneNumber")}
                      />
                    ) : (
                      <Placeholderr
                        value={selectedAdminDetails.details.phoneNumber}
                      />
                    )}
                  </p>

                  <div className="flex justify-between mt-4">
                    {isEditMode ? (
                      <>
                        <Button
                          onClick={handleSubmit(onSubmit)}
                          text="Save Changes"
                        />
                        <Button
                          onClick={() => setIsEditMode(false)}
                          text="Cancel"
                        />
                      </>
                    ) : (
                      <Button onClick={() => setIsEditMode(true)} text="Edit" />
                    )}
                    <Button onClick={closeModal} text="Close" />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Adminlist;
