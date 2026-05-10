<template>

    <section class="w-full 2xl:h-150 h-60 overflow-hidden">
        <img src="/src/assets/514041925_122145123086783934_7314259041562917189_n.jpg" alt="Grapes Hero"
            class="w-full h-full object-cover" />
    </section>

    <section class="bg-[#e2fce2] py-16 px-6 md:px-12 lg:px-24 font-sans">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                <div class="space-y-6">
                    <h2 class="2xl:text-4xl text-3xl font-bold text-slate-800 leading-tight mb-4">
                        To Visit Our Garden, Get in Touch
                    </h2>

                    <p class="text-slate-700 text-lg">
                        Halamanerong Islander is a community farm with a passion for growing grapes and nurturing
                        nature.
                    </p>

                    <div class="text-slate-700 text-lg space-y-1 pt-4">
                        <p class="font-bold">+639452818356</p>
                        <p>Barangay Kapitane Talim Island</p>
                        <p>Binangonan Rizal, Binangonan,</p>
                        <p>Philippines, 1940</p>
                    </div>

                    <div class="pt-6">
                        <p class="font-bold text-lg mb-2">Business Hours:</p>
                        <ul class="text-slate-700 text-lg space-y-1">
                            <li>Mon - Thurs: 8am-1pm & 2pm-5pm</li>
                            <li>Friday: Closed</li>
                            <li>Saturday: Closed</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex flex-col">
                            <label class="text-slate-700 font-medium mb-1 ml-2">FirstName</label>
                            <input type="text"
                                class="w-full p-4 rounded-lg border-none focus:ring-2 focus:ring-green-400 outline-none shadow-sm h-12 bg-white">
                        </div>
                        <div class="flex flex-col">
                            <label class="text-slate-700 font-medium mb-1 ml-2">LastName</label>
                            <input type="text"
                                class="w-full p-4 rounded-lg border-none focus:ring-2 focus:ring-green-400 outline-none shadow-sm h-12 bg-white">
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-slate-700 font-medium mb-1 ml-2">Email Adress</label>
                        <input type="email"
                            class="w-full p-4 rounded-lg border-none focus:ring-2 focus:ring-green-400 outline-none shadow-sm h-12 bg-white">
                    </div>

                    <div class="flex flex-col">
                        <label class="text-slate-700 font-medium mb-1 ml-2">Contact Number</label>
                        <input type="text"
                            class="w-full p-4 rounded-lg border-none focus:ring-2 focus:ring-green-400 outline-none shadow-sm h-12 bg-white">
                    </div>

                    <button
                        class="w-full bg-[#46cf63] hover:bg-green-500 text-white font-bold py-4 rounded-2xl transition-all shadow-md mt-4">
                        Proceed
                    </button>
                </div>
            </div>

            <div class="w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <img src="/src/assets/514041925_122145123086783934_7314259041562917189_n.jpg" alt="Location Map"
                    class="w-full h-100 object-cover" />
            </div>
        </div>
    </section>
</template>