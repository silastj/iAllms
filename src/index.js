import { UserController } from './controller/UserController.js';
import { ProductController } from './controller/ProductController.js';
import { ModelController } from './controller/ModelTrainingController.js';
import { TFVisorController } from './controller/TFVisorController.js';
import { TFVisorView } from './view/TFVisorView.js';
import { UserService } from './service/UserService.js';
import { ProductService } from './service/ProductService.js';
import { UserView } from './view/UserView.js';
import { ProductView } from './view/ProductView.js';
import { ModelView } from './view/ModelTrainingView.js';
import Events from './events/events.js';
import { WorkerController } from './controller/WorkerController.js';

// Inicialização dos serviços
const userService = new UserService();
const productService = new ProductService();

// Inicialização das views
const userView = new UserView();
const productView = new ProductView();
const modelView = new ModelView();
const tfVisorView = new TFVisorView();

// Inicialização do Web Worker para treinamento do modelo
const mlWorker = new Worker('/src/workers/modelTrainingWorker.js', { type: 'module' });

// Configuração do controlador do Worker
const w = WorkerController.init({
    worker: mlWorker,
    events: Events
});

// Busca usuários e inicia o treinamento do modelo
const users = await userService.getDefaultUsers();
w.triggerTrain(users);

// Inicialização dos controladores
ModelController.init({
    modelView,
    userService,
    events: Events,
});

TFVisorController.init({
    tfVisorView,
    events: Events,
});

ProductController.init({
    productView,
    userService,
    productService,
    events: Events,
});

const userController = UserController.init({
    userView,
    userService,
    productService,
    events: Events,
});

// Renderiza usuários padrão incluindo um usuário de teste
userController.renderUsers({
    "id": 99,
    "name": "Josézin da Silva",
    "age": 30,
    "purchases": []
});