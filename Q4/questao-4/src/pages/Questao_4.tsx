export function Questao_4() {
  return (
    <div className="flex flex-col h-screen w-screen text-black items-center justify-center bg-radial-[at_50%_75%] from-[#FFFFFF] to-[#A4DBFF] to-90%">
      <header className="flex items-center justify-center w-full h-20">
        <h2 className="text-3xl font-medium">Questão 4</h2>
      </header>
      <main className="flex flex-col items-center justify-center gap-4 p-5 w-full h-full sm:flex-row md:flex-row">
        <div className="bg-gradient-to-b from-[#F8A53C] to-[#FFFFFF] flex items-center justify-center h-[70%] w-[80%] md:h-[70%] md:w-[20%] rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out duration-300">
            <p>Coluna 1</p>
        </div>
        <div className="bg-gradient-to-b from-[#F8A53C] to-[#FFFFFF] flex items-center justify-center h-[70%] w-[80%] md:h-[70%] md:w-[20%] rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out duration-300">
            <p>Coluna 2</p>
        </div>
        <div className="bg-gradient-to-b from-[#F8A53C] to-[#FFFFFF] flex items-center justify-center h-[70%] w-[80%] md:h-[70%] md:w-[20%] rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out duration-300">
            <p>Coluna 3</p>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-16 bg-[#4644C7] text-white">
        <p>Desenvolvido por Beatriz Alves dos Santos.</p>
      </footer>
    </div>
  );
}