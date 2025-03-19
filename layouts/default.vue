<template>
    <div class="flex flex-col min-h-screen">
        <header class="bg-blue-600 text-white p-4 shadow-md text-center text-xl font-bold">
            <h1>공통 헤더</h1>
        </header>
        
        <main class="flex-grow">
            <nuxt />
        </main>
        
        <footer class="bg-gray-800 text-white p-4 text-center mt-auto">
            <div class="bg-gray-800 text-white p-4 text-center mt-auto">
                <h1>공통 푸터</h1>
            </div>
        </footer>
    </div>
</template>
