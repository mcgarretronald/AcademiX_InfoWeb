export default function Footer() {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/footer.png')",
            }}
        >
            <div className="py-10 text-center text-white">
                <h2 className="text-xl font-mako">AcademiX - Empowering Education</h2>
                <p className="text-sm font-jua">© 2024 AcademiX. All Rights Reserved.</p>
            </div>
        </div>
    );
}
