import { useState } from 'react';
import {
    Terminal,
    Download,
    Settings,
    FolderPlus,
    Github,
    GitBranch,
    CheckCircle2,
    Circle
} from 'lucide-react';

export default function GitTutorial() {
    const [completedSteps, setCompletedSteps] = useState(new Set());
    const [activeSection, setActiveSection] = useState('local');
    const totalSteps = 7;

    const toggleStep = (stepId) => {
        const newCompleted = new Set(completedSteps);
        if (newCompleted.has(stepId)) {
            newCompleted.delete(stepId);
        } else {
            newCompleted.add(stepId);
        }
        setCompletedSteps(newCompleted);
    };

    const progressPercentage = (completedSteps.size / totalSteps) * 100;

    const StepIcon = ({ stepId }) => {
        const isCompleted = completedSteps.has(stepId);
        return isCompleted ?
            <CheckCircle2 className="w-6 h-6 text-green-500" /> :
            <Circle className="w-6 h-6 text-gray-400" />;
    };

    return (
        <div style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            background: "linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)",
            minHeight: "100vh",
            margin: 0,
            padding: 0,
            boxSizing: "border-box"
        }}>
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "2rem 1rem"
            }}>
                {/* Header */}
                <header style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem"
                    }}>
                        <Terminal style={{
                            marginRight: "0.75rem",
                            color: "#2563eb",
                            width: "40px",
                            height: "40px"
                        }} />
                        <h1 style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            color: "#1f2937",
                            margin: 0
                        }}>Tutorial Git & GitHub</h1>
                    </div>
                    <p style={{
                        fontSize: "1.25rem",
                        color: "#6b7280",
                        marginBottom: "0.5rem"
                    }}>
                        Instalación y configuración de herramienta de versionamiento
                    </p>
                    <div style={{
                        backgroundColor: "#dbeafe",
                        color: "#1e40af",
                        padding: "0.5rem 1rem",
                        borderRadius: "9999px",
                        display: "inline-block",
                        fontWeight: "500"
                    }}>
                        Santiago Espinosa salgado   <br/>
                        Actividad: Instalación Y Configuración De Herramienta De Versionamiento (Local / Web) <br/>
                        GA7-220501096-AA1-EV04

                    </div>
                </header>

                {/* Progress Bar */}
                <div style={{
                    background: "white",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    marginBottom: "2rem"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5rem"
                    }}>
            <span style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#374151"
            }}>Progreso general</span>
                        <span style={{
                            fontSize: "0.875rem",
                            color: "#6b7280"
                        }}>{Math.round(progressPercentage)}%</span>
                    </div>
                    <div style={{
                        width: "100%",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "9999px",
                        height: "0.5rem"
                    }}>
                        <div style={{
                            backgroundColor: "#2563eb",
                            height: "0.5rem",
                            borderRadius: "9999px",
                            transition: "width 0.3s ease",
                            width: `${progressPercentage}%`
                        }} />
                    </div>
                </div>

                {/* Section Tabs */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "2rem"
                }}>
                    <div style={{
                        background: "white",
                        borderRadius: "0.5rem",
                        padding: "0.25rem",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}>
                        <button
                            onClick={() => setActiveSection('local')}
                            style={{
                                padding: "0.75rem 1.5rem",
                                border: "none",
                                borderRadius: "0.375rem",
                                fontWeight: "500",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                display: "inline-flex",
                                alignItems: "center",
                                backgroundColor: activeSection === 'local' ? "#2563eb" : "transparent",
                                color: activeSection === 'local' ? "white" : "#6b7280",
                                boxShadow: activeSection === 'local' ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"
                            }}
                        >
                            <Terminal style={{ marginRight: "0.5rem", width: "24px", height: "24px" }} />
                            Parte 1: Instalación Local
                        </button>
                        <button
                            onClick={() => setActiveSection('web')}
                            style={{
                                padding: "0.75rem 1.5rem",
                                border: "none",
                                borderRadius: "0.375rem",
                                fontWeight: "500",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                display: "inline-flex",
                                alignItems: "center",
                                backgroundColor: activeSection === 'web' ? "#2563eb" : "transparent",
                                color: activeSection === 'web' ? "white" : "#6b7280",
                                boxShadow: activeSection === 'web' ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"
                            }}
                        >
                            <Github style={{ marginRight: "0.5rem", width: "24px", height: "24px" }} />
                            Parte 2: Configuración Web
                        </button>
                    </div>
                </div>

                {/* Steps Container */}
                <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
                    {/* Local Steps */}
                    {activeSection === 'local' && (
                        <div>
                            {/* Download Step */}
                            <div style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                background: "white",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderLeft: "4px solid #2563eb"
                            }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        marginBottom: "0.75rem"
                                    }}
                                    onClick={() => toggleStep('download')}
                                >
                                    <StepIcon stepId="download" />
                                    <Download style={{
                                        marginLeft: "0.75rem",
                                        marginRight: "0.75rem",
                                        color: "#2563eb",
                                        width: "24px",
                                        height: "24px"
                                    }} />
                                    <h3 style={{
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0
                                    }}>Descarga e instalación de Git</h3>
                                </div>
                                <div style={{ marginLeft: "3rem" }}>
                                    <p style={{ marginBottom: "0.75rem", color: "#374151" }}>
                                        Instala Git según tu sistema operativo:
                                    </p>

                                    <div style={{
                                        padding: "0.75rem",
                                        borderRadius: "0.375rem",
                                        marginBottom: "1rem",
                                        backgroundColor: "#eff6ff"
                                    }}>
                                        <strong style={{ color: "#1e40af" }}>Windows:</strong>
                                        <p style={{ margin: "0.25rem 0" }}>
                                            1. Visita <a href="https://git-scm.com/downloads" style={{ color: "#2563eb", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">https://git-scm.com/downloads</a>
                                        </p>
                                        <p style={{ margin: 0 }}>2. Descarga el instalador para Windows.<br/>

                                            3. Ejecuta el instalador y deja la mayoría de opciones por defecto.<br/>

                                            4. Finaliza la instalación..</p>
                                    </div>

                                    <div style={{
                                        padding: "0.75rem",
                                        borderRadius: "0.375rem",
                                        marginBottom: "1rem",
                                        backgroundColor: "#f0fdf4"
                                    }}>
                                        <strong style={{ color: "#166534" }}>Linux (Ubuntu/Debian):</strong>
                                        <div style={{
                                            backgroundColor: "#111827",
                                            color: "#10b981",
                                            padding: "1rem",
                                            borderRadius: "0.5rem",
                                            fontFamily: "'Courier New', monospace",
                                            fontSize: "0.875rem",
                                            margin: "0.75rem 0",
                                            overflowX: "auto"
                                        }}>
                      <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
{`sudo apt update
sudo apt install git`}
                      </pre>
                                        </div>
                                    </div>

                                    <div style={{
                                        padding: "0.75rem",
                                        borderRadius: "0.375rem",
                                        backgroundColor: "#faf5ff"
                                    }}>
                                        <strong style={{ color: "#7c3aed" }}>macOS:</strong>
                                        <div style={{
                                            backgroundColor: "#111827",
                                            color: "#10b981",
                                            padding: "1rem",
                                            borderRadius: "0.5rem",
                                            fontFamily: "'Courier New', monospace",
                                            fontSize: "0.875rem",
                                            margin: "0.75rem 0",
                                            overflowX: "auto"
                                        }}>
                                            <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>brew install git</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Config Step */}
                            <div style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                background: "white",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderLeft: "4px solid #2563eb"
                            }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        marginBottom: "0.75rem"
                                    }}
                                    onClick={() => toggleStep('config')}
                                >
                                    <StepIcon stepId="config" />
                                    <Settings style={{
                                        marginLeft: "0.75rem",
                                        marginRight: "0.75rem",
                                        color: "#2563eb",
                                        width: "24px",
                                        height: "24px"
                                    }} />
                                    <h3 style={{
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0
                                    }}>Configuración inicial de Git</h3>
                                </div>
                                <div style={{ marginLeft: "3rem" }}>
                                    <p style={{ marginBottom: "0.75rem", color: "#374151" }}>
                                        Configura tu información de usuario:
                                    </p>
                                    <div style={{
                                        backgroundColor: "#111827",
                                        color: "#10b981",
                                        padding: "1rem",
                                        borderRadius: "0.5rem",
                                        fontFamily: "'Courier New', monospace",
                                        fontSize: "0.875rem",
                                        margin: "0.75rem 0",
                                        overflowX: "auto"
                                    }}>
                    <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
{`git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
git config --list`}
                    </pre>
                                    </div>
                                </div>
                            </div>

                            {/* Local Repo Step */}
                            <div style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                background: "white",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderLeft: "4px solid #2563eb"
                            }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        marginBottom: "0.75rem"
                                    }}
                                    onClick={() => toggleStep('localRepo')}
                                >
                                    <StepIcon stepId="localRepo" />
                                    <FolderPlus style={{
                                        marginLeft: "0.75rem",
                                        marginRight: "0.75rem",
                                        color: "#2563eb",
                                        width: "24px",
                                        height: "24px"
                                    }} />
                                    <h3 style={{
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0
                                    }}>Crear un repositorio local</h3>
                                </div>
                                <div style={{ marginLeft: "3rem" }}>
                                    <p style={{ marginBottom: "0.75rem", color: "#374151" }}>
                                        Inicializa tu primer repositorio:
                                    </p>
                                    <div style={{
                                        backgroundColor: "#111827",
                                        color: "#10b981",
                                        padding: "1rem",
                                        borderRadius: "0.5rem",
                                        fontFamily: "'Courier New', monospace",
                                        fontSize: "0.875rem",
                                        margin: "0.75rem 0",
                                        overflowX: "auto"
                                    }}>
                    <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
{`mkdir mi_proyecto
cd mi_proyecto
git init
echo "# Mi Proyecto" > README.md
git add README.md
git commit -m "Primer commit"`}
                    </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Web Steps */}
                    {activeSection === 'web' && (
                        <div>
                            {/* GitHub Account Step */}
                            <div style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                background: "white",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderLeft: "4px solid #2563eb"
                            }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        marginBottom: "0.75rem"
                                    }}
                                    onClick={() => toggleStep('githubAccount')}
                                >
                                    <StepIcon stepId="githubAccount" />
                                    <Github style={{
                                        marginLeft: "0.75rem",
                                        marginRight: "0.75rem",
                                        color: "#2563eb",
                                        width: "24px",
                                        height: "24px"
                                    }} />
                                    <h3 style={{
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0
                                    }}>Crear cuenta en GitHub</h3>
                                </div>
                                <div style={{ marginLeft: "3rem" }}>
                                    <p style={{ color: "#374151", margin: 0 }}>
                                        Visita <a href="https://github.com" style={{ color: "#2563eb", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">https://github.com</a> y regístrate o inicia sesión.
                                    </p>
                                </div>
                            </div>

                            {/* GitHub Repo Step */}
                            <div style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                background: "white",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderLeft: "4px solid #2563eb"
                            }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        marginBottom: "0.75rem"
                                    }}
                                    onClick={() => toggleStep('githubRepo')}
                                >
                                    <StepIcon stepId="githubRepo" />
                                    <FolderPlus style={{
                                        marginLeft: "0.75rem",
                                        marginRight: "0.75rem",
                                        color: "#2563eb",
                                        width: "24px",
                                        height: "24px"
                                    }} />
                                    <h3 style={{
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0
                                    }}>Crear un repositorio en GitHub</h3>
                                </div>
                                <div style={{ marginLeft: "3rem" }}>
                                    <p style={{ color: "#374151", margin: 0 }}>
                                        Haz clic en 'New repository', completa los campos y crea el repositorio.
                                    </p>
                                </div>
                            </div>

                            {/* Connect Repo Step */}
                            <div style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                background: "white",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderLeft: "4px solid #2563eb"
                            }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        marginBottom: "0.75rem"
                                    }}
                                    onClick={() => toggleStep('connectRepo')}
                                >
                                    <StepIcon stepId="connectRepo" />
                                    <GitBranch style={{
                                        marginLeft: "0.75rem",
                                        marginRight: "0.75rem",
                                        color: "#2563eb",
                                        width: "24px",
                                        height: "24px"
                                    }} />
                                    <h3 style={{
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0
                                    }}>Conectar repositorio local con GitHub</h3>
                                </div>
                                <div style={{ marginLeft: "3rem" }}>
                                    <p style={{ marginBottom: "0.75rem", color: "#374151" }}>
                                        Sincroniza tu repositorio local con GitHub:
                                    </p>
                                    <div style={{
                                        backgroundColor: "#111827",
                                        color: "#10b981",
                                        padding: "1rem",
                                        borderRadius: "0.5rem",
                                        fontFamily: "'Courier New', monospace",
                                        fontSize: "0.875rem",
                                        margin: "0.75rem 0",
                                        overflowX: "auto"
                                    }}>
                    <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
{`git remote add origin https://github.com/usuario/mi_proyecto.git
git branch -M main
git push -u origin main`}
                    </pre>
                                    </div>
                                </div>
                            </div>

                            {/* Verify Step */}
                            <div style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                background: "white",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                borderLeft: "4px solid #2563eb"
                            }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        marginBottom: "0.75rem"
                                    }}
                                    onClick={() => toggleStep('verify')}
                                >
                                    <StepIcon stepId="verify" />
                                    <CheckCircle2 style={{
                                        marginLeft: "0.75rem",
                                        marginRight: "0.75rem",
                                        color: "#2563eb",
                                        width: "24px",
                                        height: "24px"
                                    }} />
                                    <h3 style={{
                                        fontSize: "1.125rem",
                                        fontWeight: "600",
                                        color: "#1f2937",
                                        margin: 0
                                    }}>Verificación</h3>
                                </div>
                                <div style={{ marginLeft: "3rem" }}>
                                    <p style={{ color: "#374151", margin: 0 }}>
                                        Verifica en GitHub que los archivos hayan sido subidos correctamente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Section */}
                <div style={{
                    marginTop: "3rem",
                    background: "white",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}>
                    <h2 style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        margin: "0 0 1rem 0"
                    }}>
                        <CheckCircle2 style={{
                            color: "#10b981",
                            marginRight: "0.75rem",
                            width: "28px",
                            height: "28px"
                        }} />
                        Resultado esperado
                    </h2>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {[
                            'Git instalado correctamente en el equipo local',
                            'Configuración básica de usuario realizada',
                            'Repositorio local inicializado con un commit',
                            'Repositorio creado en GitHub',
                            'Sincronización exitosa entre local y remoto'
                        ].map((item, index) => (
                            <li key={index} style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "0.5rem",
                                color: "#374151"
                            }}>
                                <Circle style={{
                                    color: "#2563eb",
                                    marginRight: "0.75rem",
                                    width: "16px",
                                    height: "16px"
                                }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}