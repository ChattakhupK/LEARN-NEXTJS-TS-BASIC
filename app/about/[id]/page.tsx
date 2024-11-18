const AboutDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      AboutDetailsPage <br />
     param :  {id}
    </div>
  );
};
export default AboutDetailsPage;
