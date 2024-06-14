import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import encryptDecrypt from "../../functions/encryptDecrypt";
import axios from "../../service/Instance";
import Button from "../../utils/themes/components/Button";
import Label from "../../utils/themes/components/Label";
import Placeholderr from "../../utils/themes/components/Placeholderr";
import Search from "../../utils/themes/components/Search";
import "./admincss/Adminlist.css";
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

// Custom debounce function
const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Adminlist: React.FC<AdminListProps> = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [admins, setAdmins] = useState<Response[]>([]);
  const [selectedAdminDetails, setSelectedAdminDetails] =
    useState<Response | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchAdmins = async (
    page: number,
    perPage: number = 10,
    query: string = ""
  ) => {
    try {
      const response = await axios.get(`/admin`, {
        params: {
          page,
          perpage: perPage,
          search: query,
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
    fetchAdmins(currentPage, rowsPerPage, searchQuery);
  }, [currentPage, rowsPerPage, searchQuery]);

  const deleteAdmin = async (id: string) => {
    try {
      await axios.delete(`/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenstorage")}`,
        },
      });
      setAdmins(admins.filter((admin) => admin.id !== id));
      toast.success("Admin deleted successfully.");
    } catch (error) {
      console.error("Error deleting admin:", error);
      toast.error("Error deleting admin.");
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
      setIsEditMode(false);
      Object.keys(adminDetails).forEach((key) => {
        setValue(key, adminDetails[key]);
      });
    } catch (err) {
      console.error("Error fetching admin details:", err);
      toast.error("Error fetching admin details.");
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
      toast.success("Admin details updated successfully.");
    } catch (error) {
      console.error("Error editing admin:", error);
      toast.error("Error editing admin.");
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = useCallback(
    debounce((value: string) => {
      setSearchQuery(value);
      setCurrentPage(1);
    }, 300),
    []
  );
  console.log(
    encryptDecrypt.decrypt(localStorage.getItem("tokenstorage") as string)
  );
  return (
    <div className="w-full mt-20 px-5">
      <div>
        <Search onChange={(e) => handleSearchChange(e.target.value)} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bolder",
            textDecoration: "underline",
            marginLeft: "100px",
            textUnderlineOffset: "9px",
            textDecorationLine: "2px",
            color: "slategray",
          }}
        >
          Admin List
        </h1>
      </div>

      <ToastContainer />
      <div className="flex justify-between items-center mb-4"></div>

      <table className="w-full text-sm text-center ml-10">
        <thead className="bg-slate-400">
          <tr>
            <th className="px-6 py-3 border">S.N</th>
            <th className="px-6 py-3 border">Username</th>
            <th className="px-6 py-3 border">First Name</th>
            <th className="px-6 py-3 border">Last Name</th>
            <th className="px-6 py-3 border">Email</th>
            <th className="px-6 py-3 border">Role</th>
            <th className="px-6 py-3 border">View</th>
            <th className="px-6 py-3 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((item, index) => (
            <tr key={index} className="odd:bg-slate-200 even:bg-gray-100">
              <td className="px-6 py-3 border">{index + 1}</td>
              <td className="px-6 py-3 border">{item.username}</td>
              <td className="px-6 py-3 border">
                <Placeholderr value={item.details.firstName?.en} />
              </td>
              <td className="px-6 py-3 border">
                <Placeholderr value={item.details.lastName?.en} />
              </td>
              <td className="px-6 py-3 border">{item.email}</td>
              <td className="px-6 py-3 border">
                <Placeholderr value={item.role.toLowerCase()} />
              </td>
              <td className="px-4 border">
                <Button onClick={() => handleView(item.id)} text="View More" />
              </td>
              <td className="px-4 border">
                <Button onClick={() => deleteAdmin(item.id)} text="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isViewModalOpen && selectedAdminDetails && (
        <div className="fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg mt-8">
            <h2 className="text-md font-bold mb-4 ml-48">Admin Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="py-2 w-full">
              <p className="py-3">
                <Label value="First Name (EN):" />
                {isEditMode ? (
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded"
                    {...register("details.firstName.en")}
                  />
                ) : (
                  <Placeholderr
                    value={selectedAdminDetails.details.firstName.en}
                  />
                )}
              </p>
              <p className="py-3">
                <Label value="First Name (NE):" />
                {isEditMode ? (
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded"
                    {...register("details.firstName.ne")}
                  />
                ) : (
                  <Placeholderr
                    value={selectedAdminDetails.details.firstName.ne}
                  />
                )}
              </p>
              <p className="py-3">
                <Label value="Last Name (EN):" />
                {isEditMode ? (
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded"
                    {...register("details.lastName.en")}
                  />
                ) : (
                  <Placeholderr
                    value={selectedAdminDetails.details.lastName.en}
                  />
                )}
              </p>
              <p className="py-3">
                <Label value="Last Name (NE):" />
                {isEditMode ? (
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded"
                    {...register("details.lastName.ne")}
                  />
                ) : (
                  <Placeholderr
                    value={selectedAdminDetails.details.lastName.ne}
                  />
                )}
              </p>
              <p className="py-3">
                <Label value="Role:" />
                {isEditMode ? (
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded"
                    {...register("role")}
                  />
                ) : (
                  <Placeholderr value={selectedAdminDetails.role} />
                )}
              </p>
              <p className="py-3">
                <Label value="Phone Number:" />
                {isEditMode ? (
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded"
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

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Adminlist;
