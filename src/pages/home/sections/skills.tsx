import type { Maybe } from '@/models';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeSkillSection
 * @description The component organizes and displays various technical skills categorized into languages.
 */
function HomeSkillSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='skills' className='px-10 sm:px-14 md:px-18 lg:px-22 py-20 bg-gradient-to-b from-white to-gray-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='inline-block relative'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            <span>{t('skills.title')}</span> <span className='text-accent'>{t('skills.title-accent')}</span>
                        </h2>
                        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent'></div>
                    </div>
                    <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto'>
                        {t('skills.subtitle')}
                    </p>
                </div>

                <div className='max-w-6xl mx-auto space-y-12'>
                    <div className='bg-white rounded-2xl p-8 shadow-sm hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-md'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                            {t('skills.categories.languages')}
                        </h3>
                        <div className='flex flex-wrap items-center gap-6'>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.javascript')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' alt='JavaScript' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>JavaScript</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.typescript')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' alt='TypeScript' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>TypeScript</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.csharp')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' alt='C#' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>C#</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.c')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' alt='C' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>C</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.python')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' alt='Python' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Python</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.cplusplus')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' alt='C++' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>C++</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.html')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' alt='HTML' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>HTML</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.css')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' alt='CSS' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>CSS</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.rust')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg' alt='Rust' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Rust</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.bash')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' alt='Bash' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Bash</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.go')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' alt='Go' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Go</span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl p-8 shadow-sm hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-md'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-6' data-translation='skills.categories.frameworks'>Frameworks & Runtime</h3>
                        <div className='flex flex-wrap items-center gap-6'>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.react')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' alt='React' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>React</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.angular')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' alt='Angular' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Angular</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.vite')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' alt='Vite' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Vite</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.ionic')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg' alt='Ionic' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Ionic</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.node')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' alt='Node' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Node</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.fastify')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg' alt='Fastify' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Fastify</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.razor')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg' alt='Razor' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Razor</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.express')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' alt='Express' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Express</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.actix-web')}>
                                <img src='/logos/actix-web.webp' alt='Actix Web' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Actix Web</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.fastapi')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' alt='FastAPI' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>FastAPI</span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl p-8 shadow-sm hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-md'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                            {t('skills.categories.databases')}
                        </h3>
                        <div className='flex flex-wrap items-center gap-6'>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.mongodb')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' alt='MongoDB' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>MongoDB</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.postgresql')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' alt='PostgreSQL' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>PostgreSQL</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.mysql')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' alt='MySQL' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>MySQL</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.prisma')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' alt='Prisma' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Prisma</span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl p-8 shadow-sm hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-md'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                            {t('skills.categories.devops-cloud')}
                        </h3>
                        <div className='flex flex-wrap items-center gap-6'>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.azure')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' alt='Azure' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Azure</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.git')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' alt='Git' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Git</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.github')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' alt='GitHub' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>GitHub</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.azure-devops')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg' alt='Azure DevOps' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Azure DevOps</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.jenkins')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' alt='Jenkins' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Jenkins</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.docker')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' alt='Docker' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Docker</span>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl p-8 shadow-sm hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-md'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-6' data-translation='skills.categories.tools-methodologies'>Outils & Méthodologies</h3>
                        <div className='flex flex-wrap items-center gap-6'>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.jira')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' alt='Jira' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Jira</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.vscode')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' alt='Visual Studio Code' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Visual Studio Code</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.visual-studio')}>
                                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg' alt='Visual Studio' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Visual Studio</span>
                            </div>
                            <div className='flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2' data-tooltip={t('skills.tooltips.zed')}>
                                <img src='/logos/zed-industries.webp' alt='Zed' className='w-8 h-8' />
                                <span className='text-gray-700 font-medium'>Zed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSkillSection;
