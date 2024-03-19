import Coursecard from "@/components/Important-cards/Coursecard";
import InternshipcardApplied from "@/components/Important-cards/Internshipcardapplied";
const page = () => {
  return (
    <div>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            {<InternshipcardApplied />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
