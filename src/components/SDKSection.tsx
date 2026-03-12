export function SDKSection() {
  return (
    <>
      <div className="section-label">§ 15 — SDK Model Context Protocol</div>
      <h2>Documentación Completa del SDK</h2>

      <div className="callout">
        <p>📚 <strong>@modelcontextprotocol/sdk</strong> es la biblioteca oficial de TypeScript/JavaScript para construir servidores y clientes MCP. Proporciona todas las abstracciones necesarias para implementar el protocolo de forma sencilla y robusta.</p>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        ¿Qué es el SDK MCP?
      </h3>
      <p style={{ lineHeight: '1.7', color: 'var(--fg-muted)' }}>
        El SDK de Model Context Protocol es una biblioteca que abstrae toda la complejidad del protocolo JSON-RPC 2.0,
        permitiéndote enfocarte en la lógica de negocio de tu servidor. Maneja automáticamente:
      </p>
      <ul style={{ lineHeight: '1.8', color: 'var(--fg-muted)', marginTop: '12px' }}>
        <li>Serialización y deserialización de mensajes JSON-RPC</li>
        <li>Gestión del ciclo de vida de conexiones</li>
        <li>Validación de esquemas con Zod</li>
        <li>Manejo de errores estandarizado</li>
        <li>Comunicación bidireccional STDIO</li>
        <li>Registro y descubrimiento de capabilities</li>
      </ul>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Instalación
      </h3>
      <div className="code-block">
        <code>
{`# Con npm
npm install @modelcontextprotocol/sdk

# Con yarn
yarn add @modelcontextprotocol/sdk

# Con pnpm
pnpm add @modelcontextprotocol/sdk

# Dependencias recomendadas
npm install zod                    `}<span className="cm"># Validación de esquemas</span>{`
npm install -D typescript @types/node`}
        </code>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Arquitectura del SDK
      </h3>
      <div style={{ background: 'var(--bg-alt)', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px', padding: '12px', background: 'rgba(0,255,136,0.1)', borderRadius: '8px', border: '1px solid var(--accent)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--accent)' }}>@modelcontextprotocol/sdk</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
          <div style={{ padding: '16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🖥️</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--fg)' }}>Server</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)' }}>Class</div>
          </div>
          <div style={{ padding: '16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📱</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--fg)' }}>Client</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)' }}>Class</div>
          </div>
          <div style={{ padding: '16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📡</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--fg)' }}>StdioTransport</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--fg-muted)' }}>Comunicación</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>▼ ▼ ▼</span>
        </div>

        <div style={{ padding: '20px', background: 'rgba(124,107,255,0.1)', borderRadius: '8px', border: '1px solid var(--accent2)', marginBottom: '20px' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--accent2)', marginBottom: '12px', textAlign: 'center' }}>Protocol Layer (JSON-RPC 2.0)</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--fg-muted)' }}>
            <span>• Request/Response</span>
            <span>• Notifications</span>
            <span>• Error Handling</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div style={{ padding: '12px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>🛠️</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', color: 'var(--fg)' }}>Tools Registry</div>
          </div>
          <div style={{ padding: '12px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>📁</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', color: 'var(--fg)' }}>Resources Registry</div>
          </div>
          <div style={{ padding: '12px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>💬</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', color: 'var(--fg)' }}>Prompts Registry</div>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Componentes Principales
      </h3>

      <h4 style={{ marginTop: '24px', marginBottom: '12px', fontFamily: "'Space Mono', monospace", color: 'var(--accent2)' }}>
        1. McpServer (Alto Nivel)
      </h4>
      <p style={{ lineHeight: '1.7', color: 'var(--fg-muted)', marginBottom: '16px' }}>
        La clase principal para crear servidores MCP. Proporciona una API de alto nivel con métodos convenientes.
      </p>
      <div className="code-block">
        <code>
{`import { McpServer } from `}<span className="str">"@modelcontextprotocol/sdk/server/mcp.js"</span>{`;
import { StdioServerTransport } from `}<span className="str">"@modelcontextprotocol/sdk/server/stdio.js"</span>{`;
import { z } from `}<span className="str">"zod"</span>{`;

`}<span className="cm">// Crear instancia del servidor</span>{`
const server = new McpServer({
  name: `}<span className="str">"mi-servidor"</span>{`,
  version: `}<span className="str">"1.0.0"</span>{`,
  capabilities: {
    tools: {},        `}<span className="cm">// Habilitar herramientas</span>{`
    resources: {},    `}<span className="cm">// Habilitar recursos</span>{`
    prompts: {}       `}<span className="cm">// Habilitar prompts</span>{`
  }
});

`}<span className="cm">// Registrar una herramienta</span>{`
server.tool(
  `}<span className="str">"sumar"</span>{`,
  `}<span className="str">"Suma dos números"</span>{`,
  {
    a: z.number().describe(`}<span className="str">"Primer número"</span>{`),
    b: z.number().describe(`}<span className="str">"Segundo número"</span>{`)
  },
  async ({ a, b }) => ({
    content: [{ type: `}<span className="str">"text"</span>{`, text: String(a + b) }]
  })
);

`}<span className="cm">// Conectar y ejecutar</span>{`
const transport = new StdioServerTransport();
await server.connect(transport);`}
        </code>
      </div>

      <h4 style={{ marginTop: '24px', marginBottom: '12px', fontFamily: "'Space Mono', monospace", color: 'var(--accent2)' }}>
        2. Server (Bajo Nivel)
      </h4>
      <p style={{ lineHeight: '1.7', color: 'var(--fg-muted)', marginBottom: '16px' }}>
        Para control total sobre el protocolo, usa la clase Server de bajo nivel con handlers personalizados.
      </p>
      <div className="code-block">
        <code>
{`import { Server } from `}<span className="str">"@modelcontextprotocol/sdk/server/index.js"</span>{`;
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from `}<span className="str">"@modelcontextprotocol/sdk/types.js"</span>{`;

const server = new Server(
  { name: `}<span className="str">"mi-servidor"</span>{`, version: `}<span className="str">"1.0.0"</span>{` },
  { capabilities: { tools: {} } }
);

`}<span className="cm">// Handler para listar herramientas</span>{`
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: `}<span className="str">"mi_tool"</span>{`,
      description: `}<span className="str">"Descripción de la herramienta"</span>{`,
      inputSchema: {
        type: `}<span className="str">"object"</span>{`,
        properties: {
          parametro: { type: `}<span className="str">"string"</span>{` }
        },
        required: [`}<span className="str">"parametro"</span>{`]
      }
    }
  ]
}));

`}<span className="cm">// Handler para ejecutar herramientas</span>{`
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === `}<span className="str">"mi_tool"</span>{`) {
    return {
      content: [{ type: `}<span className="str">"text"</span>{`, text: \`Resultado: ${"$"}{args.parametro}\` }]
    };
  }

  throw new Error(\`Tool desconocida: ${"$"}{name}\`);
});`}
        </code>
      </div>

      <h4 style={{ marginTop: '24px', marginBottom: '12px', fontFamily: "'Space Mono', monospace", color: 'var(--accent2)' }}>
        3. Transports
      </h4>
      <p style={{ lineHeight: '1.7', color: 'var(--fg-muted)', marginBottom: '16px' }}>
        Los transports manejan la comunicación física entre cliente y servidor.
      </p>
      <div className="code-block">
        <code>
{`import { StdioServerTransport } from `}<span className="str">"@modelcontextprotocol/sdk/server/stdio.js"</span>{`;
import { SSEServerTransport } from `}<span className="str">"@modelcontextprotocol/sdk/server/sse.js"</span>{`;
import { WebSocketServerTransport } from `}<span className="str">"@modelcontextprotocol/sdk/server/websocket.js"</span>{`;

`}<span className="cm">// STDIO Transport (más común)</span>{`
const stdioTransport = new StdioServerTransport();

`}<span className="cm">// SSE Transport (Server-Sent Events)</span>{`
const sseTransport = new SSEServerTransport(`}<span className="str">"/messages"</span>{`, response);

`}<span className="cm">// WebSocket Transport</span>{`
const wsTransport = new WebSocketServerTransport(websocket);`}
        </code>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Flujo de Funcionamiento
      </h3>
      <div style={{ background: 'var(--bg-alt)', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px', padding: '12px', background: 'rgba(0,255,136,0.1)', borderRadius: '8px', border: '1px solid var(--accent)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--accent)' }}>CICLO DE VIDA DEL SDK</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Step 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg)', flexShrink: 0 }}>1</div>
            <div style={{ flex: 1, padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--fg)', marginBottom: '4px' }}>new McpServer()</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>Configura nombre, versión y capabilities</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}><span style={{ color: 'var(--accent)' }}>▼</span></div>

          {/* Step 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg)', flexShrink: 0 }}>2</div>
            <div style={{ flex: 1, padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--fg)', marginBottom: '4px' }}>server.tool() / resource() / prompt()</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>Registra handlers para tools, resources y prompts</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}><span style={{ color: 'var(--accent)' }}>▼</span></div>

          {/* Step 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg)', flexShrink: 0 }}>3</div>
            <div style={{ flex: 1, padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--fg)', marginBottom: '4px' }}>server.connect(transport)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>Vincula transport (STDIO / SSE / WebSocket)</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}><span style={{ color: 'var(--accent)' }}>▼</span></div>

          {/* Step 4 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg)', flexShrink: 0 }}>4</div>
            <div style={{ flex: 1, padding: '12px 16px', background: 'rgba(124,107,255,0.1)', borderRadius: '8px', border: '1px solid var(--accent2)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--accent2)', marginBottom: '4px' }}>Handshake (initialize)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>Cliente ↔ Servidor: intercambio de protocolVersion y capabilities</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}><span style={{ color: 'var(--accent)' }}>▼</span></div>

          {/* Step 5 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg)', flexShrink: 0 }}>5</div>
            <div style={{ flex: 1, padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--fg)', marginBottom: '4px' }}>Loop de Operación</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>tools/call, resources/read, prompts/get, notifications</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}><span style={{ color: 'var(--accent)' }}>▼</span></div>

          {/* Step 6 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--fg-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--bg)', flexShrink: 0 }}>6</div>
            <div style={{ flex: 1, padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 'bold', color: 'var(--fg)', marginBottom: '4px' }}>server.close()</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-muted)' }}>Limpieza de recursos y cierre de conexión</div>
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Registro de Resources
      </h3>
      <div className="code-block">
        <code>
{`import { McpServer, ResourceTemplate } from `}<span className="str">"@modelcontextprotocol/sdk/server/mcp.js"</span>{`;

const server = new McpServer({
  name: `}<span className="str">"servidor-recursos"</span>{`,
  version: `}<span className="str">"1.0.0"</span>{`,
  capabilities: { resources: {} }
});

`}<span className="cm">// Recurso estático</span>{`
server.resource(
  `}<span className="str">"config"</span>{`,
  `}<span className="str">"config://app/settings"</span>{`,
  async () => ({
    contents: [{
      uri: `}<span className="str">"config://app/settings"</span>{`,
      mimeType: `}<span className="str">"application/json"</span>{`,
      text: JSON.stringify({ theme: `}<span className="str">"dark"</span>{`, lang: `}<span className="str">"es"</span>{` })
    }]
  })
);

`}<span className="cm">// Recurso dinámico con template</span>{`
server.resource(
  `}<span className="str">"archivo"</span>{`,
  new ResourceTemplate(`}<span className="str">"file:///{'path'}"</span>{`, { list: undefined }),
  async (uri, { path }) => {
    const contenido = await fs.readFile(path, `}<span className="str">"utf-8"</span>{`);
    return {
      contents: [{
        uri: uri.href,
        mimeType: `}<span className="str">"text/plain"</span>{`,
        text: contenido
      }]
    };
  }
);`}
        </code>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Registro de Prompts
      </h3>
      <div className="code-block">
        <code>
{`server.prompt(
  `}<span className="str">"analizar-codigo"</span>{`,
  `}<span className="str">"Analiza código y sugiere mejoras"</span>{`,
  {
    codigo: z.string().describe(`}<span className="str">"Código a analizar"</span>{`),
    lenguaje: z.string().optional().describe(`}<span className="str">"Lenguaje de programación"</span>{`)
  },
  async ({ codigo, lenguaje }) => ({
    messages: [
      {
        role: `}<span className="str">"user"</span>{`,
        content: {
          type: `}<span className="str">"text"</span>{`,
          text: \`Analiza el siguiente código ${"$"}{lenguaje ? \`en ${"$"}{lenguaje}\` : ''}:

${"$"}{codigo}

Proporciona:
1. Resumen de lo que hace
2. Posibles bugs o problemas
3. Sugerencias de mejora\`
        }
      }
    ]
  })
);`}
        </code>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Manejo de Errores
      </h3>
      <div className="code-block">
        <code>
{`import { McpError, ErrorCode } from `}<span className="str">"@modelcontextprotocol/sdk/types.js"</span>{`;

server.tool(
  `}<span className="str">"dividir"</span>{`,
  `}<span className="str">"Divide dos números"</span>{`,
  { a: z.number(), b: z.number() },
  async ({ a, b }) => {
    `}<span className="cm">// Validación con error MCP estándar</span>{`
    if (b === 0) {
      throw new McpError(
        ErrorCode.InvalidParams,
        `}<span className="str">"No se puede dividir por cero"</span>{`
      );
    }

    return {
      content: [{ type: `}<span className="str">"text"</span>{`, text: String(a / b) }]
    };
  }
);

`}<span className="cm">// Códigos de error disponibles:</span>{`
`}<span className="cm">// ErrorCode.ParseError       = -32700</span>{`
`}<span className="cm">// ErrorCode.InvalidRequest   = -32600</span>{`
`}<span className="cm">// ErrorCode.MethodNotFound   = -32601</span>{`
`}<span className="cm">// ErrorCode.InvalidParams    = -32602</span>{`
`}<span className="cm">// ErrorCode.InternalError    = -32603</span>{`
`}<span className="cm">// ErrorCode.ResourceNotFound = -32002</span>{`
`}<span className="cm">// ErrorCode.ResourceAccessDenied = -32003</span>{`
`}
        </code>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Notificaciones y Logging
      </h3>
      <div className="code-block">
        <code>
{`server.tool(
  `}<span className="str">"proceso-largo"</span>{`,
  `}<span className="str">"Ejecuta un proceso con progreso"</span>{`,
  { pasos: z.number() },
  async ({ pasos }, { meta }) => {
    const progressToken = meta?.progressToken;

    for (let i = 1; i <= pasos; i++) {
      `}<span className="cm">// Enviar progreso al cliente</span>{`
      if (progressToken) {
        await server.server.notification({
          method: `}<span className="str">"notifications/progress"</span>{`,
          params: {
            progressToken,
            progress: i,
            total: pasos
          }
        });
      }

      `}<span className="cm">// Enviar log</span>{`
      await server.server.notification({
        method: `}<span className="str">"notifications/message"</span>{`,
        params: {
          level: `}<span className="str">"info"</span>{`,
          logger: `}<span className="str">"proceso"</span>{`,
          data: \`Paso ${"$"}{i} de ${"$"}{pasos} completado\`
        }
      });

      await new Promise(r => setTimeout(r, 1000));
    }

    return {
      content: [{ type: `}<span className="str">"text"</span>{`, text: `}<span className="str">"Proceso completado"</span>{` }]
    };
  }
);`}
        </code>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Cliente MCP
      </h3>
      <p style={{ lineHeight: '1.7', color: 'var(--fg-muted)', marginBottom: '16px' }}>
        El SDK también permite crear clientes para conectarse a servidores MCP.
      </p>
      <div className="code-block">
        <code>
{`import { Client } from `}<span className="str">"@modelcontextprotocol/sdk/client/index.js"</span>{`;
import { StdioClientTransport } from `}<span className="str">"@modelcontextprotocol/sdk/client/stdio.js"</span>{`;

`}<span className="cm">// Crear cliente</span>{`
const client = new Client({
  name: `}<span className="str">"mi-cliente"</span>{`,
  version: `}<span className="str">"1.0.0"</span>{`
});

`}<span className="cm">// Conectar a un servidor</span>{`
const transport = new StdioClientTransport({
  command: `}<span className="str">"node"</span>{`,
  args: [`}<span className="str">"./dist/server.js"</span>{`]
});

await client.connect(transport);

`}<span className="cm">// Listar herramientas disponibles</span>{`
const { tools } = await client.listTools();

`}<span className="cm">// Llamar a una herramienta</span>{`
const result = await client.callTool({
  name: `}<span className="str">"sumar"</span>{`,
  arguments: { a: 5, b: 3 }
});

`}<span className="cm">// Listar y leer recursos</span>{`
const { resources } = await client.listResources();
const resource = await client.readResource({ uri: `}<span className="str">"config://app"</span>{` });

`}<span className="cm">// Cerrar conexión</span>{`
await client.close();`}
        </code>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Ejemplo Completo: Servidor de Base de Datos
      </h3>
      <div className="code-block">
        <code>
{`#!/usr/bin/env node
import { McpServer } from `}<span className="str">"@modelcontextprotocol/sdk/server/mcp.js"</span>{`;
import { StdioServerTransport } from `}<span className="str">"@modelcontextprotocol/sdk/server/stdio.js"</span>{`;
import { z } from `}<span className="str">"zod"</span>{`;
import Database from `}<span className="str">"better-sqlite3"</span>{`;

const db = new Database(`}<span className="str">"./data.db"</span>{`);

const server = new McpServer({
  name: `}<span className="str">"db-server"</span>{`,
  version: `}<span className="str">"1.0.0"</span>{`,
  capabilities: {
    tools: {},
    resources: {}
  }
});

`}<span className="cm">// Tool: Ejecutar consulta SQL</span>{`
server.tool(
  `}<span className="str">"query"</span>{`,
  `}<span className="str">"Ejecuta una consulta SQL SELECT"</span>{`,
  {
    sql: z.string().describe(`}<span className="str">"Consulta SQL (solo SELECT)"</span>{`)
  },
  async ({ sql }) => {
    if (!sql.trim().toLowerCase().startsWith(`}<span className="str">"select"</span>{`)) {
      throw new Error(`}<span className="str">"Solo se permiten consultas SELECT"</span>{`);
    }

    const rows = db.prepare(sql).all();
    return {
      content: [{
        type: `}<span className="str">"text"</span>{`,
        text: JSON.stringify(rows, null, 2)
      }]
    };
  }
);

`}<span className="cm">// Resource: Esquema de la base de datos</span>{`
server.resource(
  `}<span className="str">"schema"</span>{`,
  `}<span className="str">"db://schema"</span>{`,
  async () => {
    const tables = db.prepare(`}<span className="str">\`
      SELECT name, sql FROM sqlite_master
      WHERE type='table'
    \`</span>{`).all();

    return {
      contents: [{
        uri: `}<span className="str">"db://schema"</span>{`,
        mimeType: `}<span className="str">"application/json"</span>{`,
        text: JSON.stringify(tables, null, 2)
      }]
    };
  }
);

`}<span className="cm">// Iniciar servidor</span>{`
const transport = new StdioServerTransport();
await server.connect(transport);
console.error(`}<span className="str">"Servidor de base de datos MCP iniciado"</span>{`);`}
        </code>
      </div>

      <div className="callout" style={{ marginTop: '24px', background: 'rgba(0,255,136,0.05)', borderColor: 'rgba(0,255,136,0.2)', borderLeftColor: 'var(--accent)' }}>
        <p>✅ <strong style={{ color: 'var(--accent)' }}>Versión Actual:</strong> El SDK @modelcontextprotocol/sdk está en versión <code>1.11.x</code>. Consulta el <a href="https://github.com/modelcontextprotocol/typescript-sdk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>repositorio oficial</a> para las últimas actualizaciones.</p>
      </div>

      <h3 style={{ marginTop: '32px', marginBottom: '16px', fontFamily: "'Space Mono', monospace", color: 'var(--accent)' }}>
        Resumen de Imports
      </h3>
      <div className="code-block">
        <code>
{`// Servidor de alto nivel
import { McpServer } from `}<span className="str">"@modelcontextprotocol/sdk/server/mcp.js"</span>{`;

// Servidor de bajo nivel
import { Server } from `}<span className="str">"@modelcontextprotocol/sdk/server/index.js"</span>{`;

// Transports
import { StdioServerTransport } from `}<span className="str">"@modelcontextprotocol/sdk/server/stdio.js"</span>{`;
import { SSEServerTransport } from `}<span className="str">"@modelcontextprotocol/sdk/server/sse.js"</span>{`;

// Cliente
import { Client } from `}<span className="str">"@modelcontextprotocol/sdk/client/index.js"</span>{`;
import { StdioClientTransport } from `}<span className="str">"@modelcontextprotocol/sdk/client/stdio.js"</span>{`;

// Tipos y esquemas
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
  ErrorCode,
  McpError
} from `}<span className="str">"@modelcontextprotocol/sdk/types.js"</span>{`;

// Templates
import { ResourceTemplate } from `}<span className="str">"@modelcontextprotocol/sdk/server/mcp.js"</span>{`;`}
        </code>
      </div>
    </>
  );
}
