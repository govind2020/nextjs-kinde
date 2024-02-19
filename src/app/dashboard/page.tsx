import DownloadButton from "../component/DownloadButton";
import ContactForm from "../component/Form";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const imageUrl =
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";

  const { getPermission } = getKindeServerSession();
  const requirePermssion = await getPermission("read:image");

  return (
    <div className="container">
      <div className="card start-hero">
        <h1>Dashboard</h1>
      </div>

      {requirePermssion?.isGranted ? (
        <DownloadButton imageUrl={imageUrl} />
      ) : (
        <h3 className="text-permmsion">
          You dont have permmssion to download anything!
        </h3>
      )}

      {/* <div className="form-fields">
        <ContactForm />
      </div> */}
    </div>
  );
}
