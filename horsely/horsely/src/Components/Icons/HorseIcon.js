import React, { Component } from 'react'

export default class HorseIcon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: props.width,
      height: props.height,
      stroke: props.stroke,
      fill: props.fill
    };
  }

  render() {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px"
          stroke={ this.state.stroke }
          fill={ this.state.fill }
          width={ this.state.width } 
          height={ this.state.height } 
          viewBox="0 0 94.039 94.038" enable-background="new 0 0 94.039 94.038"><g><g><path d="M50.632 23.056h-0.868c-0.045 0-0.074 0.033-0.098 0.072 0.312 0.055 0.631 0.087 0.966 0.101C50.755 23.233 50.755 23.056 50.632 23.056z"/><path d="M90.572 80.966c-0.032-0.118 0.026-0.161 0.129-0.095 0.003 0.002 0.006 0.004 0.009 0.005 0.104 0.064 0.162 0.022 0.128-0.095 -0.654-2.304-1.893-4.286-2.654-6.481 -0.04-0.116-0.012-0.131 0.062-0.033 0.165 0.219 0.33 0.438 0.496 0.655 0.074 0.098 0.147 0.168 0.164 0.157 0.017-0.012-0.021-0.105-0.083-0.21 -0.912-1.53-1.824-3.06-2.736-4.589 -0.062-0.105-0.08-0.212-0.038-0.238s0.134 0.033 0.205 0.132c0.201 0.277 0.401 0.555 0.603 0.832 0.071 0.099 0.145 0.174 0.162 0.168s0.006-0.093-0.027-0.194c-0.033-0.101-0.04-0.202-0.015-0.228 0.024-0.025 0.113 0.025 0.199 0.112 0.407 0.417 0.819 0.839 1.276 1.307 0.086 0.088 0.106 0.07 0.046-0.037 -0.104-0.187-0.197-0.356-0.286-0.515 -0.06-0.107-0.091-0.225-0.069-0.25 0.021-0.025 0.118-0.009 0.22 0.061 0.504 0.354 1.012 0.668 1.552 1.046 0.101 0.07 0.147-0.035 0.104-0.134 -0.043-0.1 0.253-0.264 0.137-0.287 -0.55-0.108-1.023-0.838-1.023-0.838 -0.775-1.229-1.755-2.367-2.511-3.608 -1.032-1.696-1.791-3.531-2.139-5.502 -0.043-0.244-0.068-0.495-0.082-0.745 -0.007-0.122-0.038-0.154-0.058-0.07 -0.019 0.083-0.07 0.057-0.11-0.06 -0.49-1.408-0.959-2.756-1.426-4.099 -0.04-0.116-0.064-0.215-0.054-0.222 0.012-0.007 0.065 0.076 0.12 0.185 0.198 0.396 0.396 0.79 0.594 1.187 0.056 0.108 0.117 0.19 0.141 0.183 0.021-0.008 0.017-0.098-0.014-0.199 -0.018-0.062-0.037-0.123-0.066-0.179 -1.214-2.385-2.419-4.774-3.661-7.144 -0.244-0.467-0.588-0.905-0.97-1.27 -1.159-1.105-2.365-2.162-3.539-3.252 -0.417-0.387-0.792-0.82-1.193-1.226 -0.207-0.209-0.406-0.438-0.648-0.597 -1.594-1.042-3.017-2.246-4.206-3.762 -1.585-2.021-3.746-3.375-5.897-4.717 -0.517-0.322-1.028-0.668-1.582-0.912 -0.736-0.324-1.492-0.674-2.273-0.804 -1.122-0.187-2.283-0.13-3.412-0.285 -0.814-0.112-1.621-0.351-2.401-0.621 -1.865-0.645-3.706-1.358-5.568-2.01 -1.222-0.428-1.907-1.494-2.824-2.286 -0.054-0.047-0.085-0.121-0.111-0.201 -0.037-0.117-0.044-0.234-0.015-0.262 0.029-0.028 0.141-0.007 0.251 0.047 0.296 0.147 0.595 0.295 0.915 0.454 0.11 0.054 0.14 0.019 0.067-0.08 -0.078-0.107-0.153-0.209-0.227-0.309 -0.073-0.099-0.122-0.197-0.11-0.219 0.012-0.022 0.112 0.001 0.223 0.052 0.5 0.227 1 0.455 1.5 0.682 0.111 0.051 0.222 0.073 0.246 0.051 0.025-0.023-0.008-0.126-0.072-0.23 -0.058-0.094-0.123-0.2-0.206-0.334 -0.064-0.104-0.024-0.152 0.09-0.107 0.805 0.32 1.52 0.604 2.227 0.885 0.114 0.045 0.211 0.07 0.218 0.055 0.008-0.015-0.075-0.074-0.184-0.131 -0.608-0.326-1.216-0.651-1.824-0.977 -0.107-0.058-0.181-0.137-0.163-0.176 0.019-0.039 0.127-0.039 0.243 0 0.25 0.084 0.499 0.168 0.749 0.252 0.116 0.039 0.22 0.049 0.232 0.021 0.012-0.027-0.055-0.112-0.149-0.19 -0.062-0.051-0.124-0.101-0.186-0.152 -0.096-0.077-0.164-0.167-0.155-0.201 0.009-0.034 0.115-0.048 0.236-0.031 0.171 0.023 0.345 0.047 0.53 0.071 0.121 0.016 0.144-0.034 0.05-0.112 -0.053-0.043-0.105-0.087-0.161-0.133 -0.095-0.078-0.084-0.19 0.03-0.231 0.701-0.253 1.331 0.124 2.027 0.236 0.121 0.019 0.139-0.032 0.039-0.102 -0.664-0.466-1.279-0.896-1.889-1.324 -0.101-0.07-0.178-0.138-0.172-0.152 0.005-0.014 0.101 0.013 0.214 0.059l1.146 0.465c0.113 0.046 0.218 0.061 0.233 0.032 0.015-0.028-0.058-0.103-0.161-0.168 -0.453-0.281-0.906-0.561-1.359-0.842 -0.104-0.063-0.182-0.139-0.173-0.167 0.009-0.028 0.111-0.023 0.229 0.011 0.112 0.032 0.229 0.065 0.354 0.101 0.118 0.033 0.168-0.028 0.099-0.129 -0.504-0.716-1.405-0.849-2.002-1.403 -0.089-0.083-0.059-0.129 0.058-0.091 0.117 0.039 0.242 0.08 0.388 0.128 0.116 0.038 0.132 0.009 0.034-0.065 -0.066-0.05-0.126-0.096-0.187-0.143 -0.098-0.074-0.077-0.142 0.045-0.15 0.162-0.011 0.314-0.022 0.483-0.034 0.122-0.008 0.127-0.048 0.011-0.087 -0.212-0.071-0.398-0.137-0.577-0.197 -0.116-0.039-0.206-0.095-0.2-0.119s0.107-0.035 0.228-0.011c0.321 0.065 0.644 0.112 0.967 0.152 0.061 0.007 0.125-0.062 0.19-0.095 0.098-0.049 0.119-0.219 0.049-0.27 -0.045-0.033-0.038-0.134 0.002-0.204 -0.495-0.088-0.959-0.255-1.371-0.636 -0.09-0.083-0.059-0.15 0.064-0.143 0.107 0.006 0.218 0.011 0.338 0.018 0.122 0.007 0.13-0.027 0.018-0.076 -0.022-0.01-0.045-0.02-0.065-0.029 -0.112-0.049-0.11-0.123 0.005-0.165 0.459-0.168 0.926-0.338 1.395-0.509 0.115-0.042 0.203-0.099 0.197-0.127 -0.006-0.028-0.11-0.056-0.232-0.061 -0.034-0.002-0.069-0.003-0.107-0.005 -0.122-0.006-0.161-0.089-0.087-0.186 0.149-0.195 0.282-0.37 0.4-0.525 0.073-0.097 0.078-0.236 0.014-0.314 -0.047-0.057-0.086-0.116-0.073-0.161 0.038-0.129 0.197-0.264 0.335-0.313 0.268-0.094 0.545-0.156 0.815-0.287 0.109-0.053 0.095-0.112-0.028-0.118 -0.729-0.034-1.457-0.069-2.186-0.103 -0.122-0.006-0.226-0.043-0.23-0.083s0.039-0.1 0.097-0.133c0.059-0.033 0.009-0.08-0.111-0.105 -0.125-0.026-0.25-0.051-0.373-0.076 -0.12-0.025-0.218-0.07-0.218-0.101s0.098-0.064 0.22-0.073c0.27-0.02 0.548-0.04 0.866-0.064 0.122-0.009 0.123-0.033 0.003-0.054 -0.519-0.09-0.993-0.172-1.461-0.254 -0.121-0.021-0.223-0.069-0.227-0.108 -0.005-0.039 0.088-0.092 0.207-0.12 0.049-0.011 0.098-0.022 0.147-0.033 0.118-0.027 0.131-0.099 0.025-0.161 -0.864-0.506-1.743-1.02-2.737-1.602 -0.106-0.062-0.093-0.102 0.029-0.088 0.767 0.094 1.445 0.26 2.071-0.042 0.11-0.053 0.095-0.126-0.026-0.147 -0.229-0.039-0.47-0.081-0.712-0.123 -0.121-0.021-0.206-0.062-0.19-0.091 0.016-0.03-0.066-0.083-0.183-0.119 -0.361-0.112-0.721-0.224-1.082-0.337 -0.117-0.036-0.207-0.104-0.201-0.151 0.006-0.047 0.109-0.094 0.231-0.105 0.275-0.025 0.549-0.05 0.824-0.075 0.122-0.011 0.219-0.038 0.218-0.06s-0.101-0.056-0.222-0.075c-0.317-0.051-0.635-0.101-0.952-0.152 -0.121-0.019-0.218-0.071-0.216-0.116s0.101-0.096 0.222-0.115c0.204-0.031 0.408-0.062 0.612-0.094 0.121-0.018 0.167-0.075 0.102-0.126 -0.065-0.051-0.123-0.132-0.13-0.181 -0.007-0.049 0.083-0.112 0.202-0.141 0.85-0.211 1.703-0.424 2.607-0.649 0.119-0.03 0.116-0.043-0.005-0.03 -1.063 0.113-1.34 0.133-1.468 0.003 -0.086-0.087-0.017-0.238 0.094-0.29 0.247-0.118 0.481-0.251 0.425-0.616 -0.019-0.121-0.156-0.208-0.279-0.203 -0.2 0.009-0.428 0.019-0.654 0.047 -0.85 0.105-0.924 0.119-1.253-0.503 -0.057-0.108-0.013-0.238 0.098-0.29 0.375-0.174 0.75-0.349 1.124-0.523 0.111-0.052 0.191-0.119 0.178-0.15 -0.013-0.031-0.116-0.022-0.23 0.024 -0.275 0.111-0.547 0.23-0.832 0.296 -0.369 0.086-0.794 0.368-1.101-0.142 -0.02-0.033-0.098-0.031-0.148-0.047 -1.652-0.55-3.305-1.096-4.954-1.653 -0.29-0.098-0.57-0.223-0.836-0.41 -0.1-0.07-0.077-0.129 0.045-0.121l0.127 0.008c0.122 0.008 0.231-0.004 0.243-0.025s-0.066-0.086-0.175-0.143c-0.428-0.226-0.857-0.451-1.285-0.677 -0.113-0.057-0.193-0.121-0.185-0.143 0.009-0.022 0.114-0.03 0.236-0.016 0.035 0.004 0.069 0.008 0.101 0.011 0.122 0.013 0.13-0.017 0.018-0.067 -0.951-0.43-1.986-0.898-3.027-1.369 -0.112-0.05-0.195-0.127-0.185-0.171 0.009-0.044 0.116-0.075 0.238-0.069 0.261 0.013 0.537 0.026 0.876 0.043 0.122 0.006 0.125-0.011 0.005-0.038 -0.199-0.044-0.362-0.081-0.534-0.119 -0.12-0.027-0.128-0.094-0.019-0.151 0.523-0.271 0.997-0.516 1.451-0.751 0.109-0.056 0.099-0.088-0.022-0.068 -0.591 0.099-1.186 0.195-1.781 0.295 -0.121 0.02-0.229-0.008-0.242-0.052 -0.013-0.043 0.036-0.136 0.109-0.182 0.073-0.046 0.034-0.144-0.085-0.169 -0.32-0.067-0.63-0.206-0.938-0.27 0 0 0.805-0.24-0.355-0.404 -1.085-0.154-2.009-0.557-2.927-1.151 -0.746-0.483-1.641-0.763-2.5-1.04 -1.025-0.331-2.084-0.557-3.124-0.841 -0.387-0.105-0.758-0.311-1.149-0.353 -0.492-0.052-0.992-0.027-1.438-0.018 -0.122 0.002-0.304-0.053-0.401-0.128 -0.104-0.081-0.203-0.154-0.303-0.156 -2.155-0.039-4.308 0.002-6.409 0.56 -0.419 0.111-0.804 0.342-1.218 0.479 -0.159 0.053-0.403 0.072-0.521-0.013 -0.429-0.313-0.824-0.673-1.225-1.022 -0.184-0.16-0.362-0.33-0.54-0.498 -0.089-0.084-0.19-0.134-0.226-0.113 -0.036 0.021-0.065 0.128-0.064 0.239 0.001 0.068 0.004 0.135 0.021 0.199 0.102 0.393 0.223 0.781 0.338 1.17 0.238 0.808 0.233 0.793-0.572 1.055 -0.347 0.113-0.72 0.246-0.988 0.478C9.686 3.452 9.321 3.435 8.915 3.418 8.569 3.404 8.22 3.453 7.872 3.457 6.749 3.469 5.68 3.244 4.676 2.724 4.619 2.694 4.551 2.685 4.482 2.68 4.371 2.672 4.287 2.757 4.294 2.869 4.298 2.94 4.309 3.01 4.343 3.062 4.783 3.75 5.244 4.407 6.057 4.73c0.442 0.176 0.86 0.43 1.26 0.692C8.016 5.881 8.174 6.425 7.944 7.23 7.596 8.453 7.198 9.67 6.975 10.916c-0.108 0.601 0.129 1.265 0.221 1.899 0.042 0.289 0.169 0.574 0.165 0.86 -0.038 2.544-0.45 5.032-1.156 7.475C6.085 21.563 6 21.986 5.924 22.342c-0.025 0.12-0.078 0.27-0.098 0.343 -0.012 0.045-0.019 0.09-0.019 0.135 0 0.05 0.007 0.097 0.018 0.141 0.021 0.076 0.071 0.177 0.102 0.229 0.03 0.052 0.074 0.126 0.096 0.169 0.013 0.025 0.027 0.049 0.045 0.074 0.123 0.176 0.263 0.333 0.404 0.491 0.082 0.091 0.092 0.249 0.017 0.345 -0.06 0.077-0.123 0.153-0.187 0.229 -0.049 0.059-0.083 0.123-0.105 0.19 -0.037 0.115-0.039 0.229-0.048 0.249 -0.007 0.014-0.011 0.027-0.011 0.039 0 0.132 0.064 0.325 0.165 0.385 0.472 0.279 0.959 0.531 1.477 0.807 0.108 0.057 0.115 0.162 0.015 0.234 -0.045 0.032-0.089 0.064-0.135 0.097 -0.1 0.071-0.107 0.197-0.007 0.267 0.517 0.361 1.071 0.341 1.653 0.249 0.274-0.043 0.561 0.001 0.841-0.002 0.124-0.001 0.296 0.026 0.362-0.042 0.395-0.402 0.882-0.444 1.409-0.506 0.729-0.086 1.367-0.981 1.266-1.721 -0.133-0.97 0.149-1.703 0.829-2.441 0.57-0.618 0.859-1.49 1.305-2.23 0.117-0.195 0.333-0.374 0.544-0.458 0.333-0.132 0.622-0.007 0.716 0.372 0.228 0.925 0.603 1.849 0.625 2.78 0.033 1.394-0.14 2.799-0.311 4.188 -0.192 1.559-0.972 2.878-1.843 4.159 -0.98 1.441-1.541 2.999-1.235 4.804 0.166 0.979 0.185 1.984 0.229 2.979 0.008 0.189-0.125 0.477-0.281 0.566 -2.789 1.596-5.217 3.669-7.655 5.732C5.7 45.54 5.23 45.812 4.833 46.167c-1.036 0.924-1.167 2.119-0.928 3.395 0.054 0.287 0.133 0.593 0.287 0.834 0.724 1.143 0.756 2.351 0.442 3.616 -0.488 1.967-0.937 3.944-1.447 5.905 -0.148 0.57-0.08 1.072 0.209 1.537 0.663 1.065 1.096 2.213 1.319 3.441 0.187 1.032 0.749 1.868 1.345 2.698 0.462 0.645 0.868 1.328 1.314 1.983 0.372 0.547 0.741 0.698 1.318 0.39 0.472-0.253 0.97-0.592 1.259-1.025 0.81-1.215 1.025-2.593 0.749-4.027 -0.054-0.279-0.17-0.594-0.362-0.79 -0.72-0.735-1.459-1.454-2.238-2.125 -0.509-0.439-0.684-1.106-0.397-1.713 0.168-0.355 0.279-0.757 0.321-1.148 0.047-0.443 0.022-0.896 0.015-1.418 -0.002-0.122 0.081-0.166 0.18-0.094 0.727 0.529 1.263 1.129 1.388 1.945 0.226 1.48 1.143 2.133 2.474 2.552 2.319 0.729 4.641 1.312 7.101 1.226 1.138-0.04 1.15 0.025 1.066-1.128 -0.122-1.678-0.954-3.043-1.963-4.316 -0.11-0.14-0.343-0.258-0.518-0.257 -0.553 0.005-1.108 0.048-1.655 0.126 -0.172 0.025-0.333 0.199-0.478 0.328 -0.271 0.242-0.532 0.496-0.816 0.767 -0.089 0.085-0.203 0.081-0.257-0.006 -0.041-0.066-0.069-0.112-0.089-0.162 -0.384-0.968-0.383-0.986-1.38-0.985 -0.747 0.001-1.325-0.373-1.667-0.939 -0.78-1.29-1.47-2.639-2.154-3.984 -0.094-0.185-0.013-0.528 0.103-0.732 0.207-0.364 0.469-0.716 0.775-1.001 0.179-0.167 0.486-0.265 0.74-0.273 2.251-0.085 4.507-0.081 6.753-0.228 2.041-0.133 4.073-0.411 6.106-0.648 0.257-0.03 0.572-0.146 0.73-0.331 0.533-0.624 1.133-0.608 1.795-0.299 1.305 0.607 2.588 1.265 3.913 1.824 1.902 0.805 3.846 1.509 5.75 2.31 3.661 1.54 7.59 1.985 11.418 2.839 0.808 0.18 1.643 0.241 2.469 0.331 0.375 0.041 0.642 0.203 0.736 0.56 0.131 0.495 0.309 1.002 0.31 1.504 0.005 1.826 0.541 3.481 1.433 5.05 0.31 0.543 0.613 1.099 0.827 1.683 0.477 1.297 0.255 2.505-0.623 3.577 -1.715 2.095-3.724 3.891-5.761 5.657 -0.627 0.544-1.256 1.089-1.838 1.679 -0.201 0.204-0.351 0.539-0.372 0.826 -0.116 1.642-0.285 3.271-0.785 4.851 -0.359 1.135 0.128 2.126 0.587 3.111 0.392 0.841 0.797 1.675 1.251 2.624 0.053 0.109 0.162 0.126 0.245 0.036 0.512-0.557 0.991-1.042 1.416-1.572 0.868-1.081 1.432-2.33 1.792-3.657 0.109-0.402 0.023-0.882-0.069-1.307 -0.114-0.534-0.372-1.039-0.474-1.574 -0.035-0.185 0.171-0.56 0.341-0.615 0.689-0.222 0.938-0.804 1.332-1.311 0.756-0.972 1.627-1.854 2.476-2.751 0.908-0.961 1.99-1.676 3.17-2.287 1.259-0.652 2.467-1.409 3.658-2.182 0.296-0.191 0.494-0.534 0.734-0.864 0.072-0.1 0.227-0.139 0.336-0.083 0.941 0.467 1.65 1.28 2.135 2.391 0.961 2.197 0.572 4.272-0.435 6.29 -0.914 1.832-1.919 3.619-2.892 5.422 -0.596 1.104-1.539 1.865-2.542 2.571 -0.281 0.198-0.573 0.426-0.76 0.708 -1.292 1.959-2.318 4.06-3.275 6.197 -0.254 0.567-0.21 0.736 0.42 0.818 0.781 0.104 1.582 0.124 2.37 0.089 1.351-0.06 2.63-0.391 3.693-1.295 0.805-0.684 1.268-1.525 1.175-2.615 -0.006-0.056-0.001-0.112-0.014-0.166 -0.214-0.996 0.037-1.669 1.122-1.996 0.821-0.248 1.265-1.006 1.627-1.739 1.048-2.116 2.025-4.267 3.103-6.367 0.842-1.641 1.775-3.235 2.698-4.831 0.61-1.054 1.254-2.09 1.922-3.107 0.647-0.989 0.478-1.874-0.126-2.82 -0.804-1.257-1.517-2.571-2.273-3.858 -0.671-1.141-0.365-2.301 0.346-3.16 1.808-2.185 2.643-4.847 3.888-7.307 0.097-0.191 0.157-0.404 0.259-0.604 0.055-0.109 0.102-0.092 0.086 0.029 -0.02 0.137-0.036 0.272-0.03 0.407 0.074 1.719 0.179 3.438 0.231 5.158 0.023 0.811-0.141 1.635-0.053 2.435 0.132 1.204 0.407 2.393 0.624 3.587 0.05 0.271 0.104 0.541 0.202 0.806 0.043 0.115 0.076 0.104 0.064-0.017 -0.016-0.15-0.03-0.302-0.045-0.453 -0.013-0.121 0.002-0.123 0.03-0.005 0.47 1.937 0.899 3.882 1.963 5.609 0.063 0.104 0.086 0.093 0.047-0.022 -0.018-0.05-0.035-0.102-0.054-0.154 -0.04-0.116-0.009-0.133 0.068-0.038 0.604 0.745 1.188 1.468 1.841 2.273 0.077 0.096 0.16 0.075 0.185-0.045 0.015-0.072 0.026-0.134 0.039-0.196 0.023-0.12 0.134-0.176 0.245-0.126 0.287 0.127 0.562 0.239 0.812 0.396 0.28 0.177 0.547 0.397 0.82 0.632 0.093 0.08 0.168 0.076 0.168-0.009s0.039-0.147 0.085-0.132c0.037 0.013 0.05 0.023 0.075 0.044 1.354 1.099 2.528 2.347 3.465 3.845 0.614 0.986 1.418 1.897 2.299 2.654 0.33 0.284 0.605 0.616 0.971 0.881 0.1 0.072 0.135 0.037 0.073-0.069 -0.089-0.151-0.178-0.304-0.268-0.455 -0.062-0.105-0.096-0.203-0.076-0.221 0.019-0.016 0.1 0.046 0.18 0.138 0.237 0.274 0.479 0.556 0.754 0.871 0.08 0.094 0.126 0.07 0.103-0.05 -0.003-0.008-0.004-0.015-0.005-0.022 -0.023-0.12 0.038-0.159 0.138-0.088 0.585 0.42 1.147 0.824 1.749 1.256 0.099 0.07 0.187 0.029 0.194-0.093 0.016-0.23 0.028-0.415 0.039-0.584 0.008-0.121 0.053-0.227 0.098-0.233s0.144 0.064 0.221 0.16c0.018 0.022 0.036 0.045 0.054 0.067 0.076 0.097 0.151 0.169 0.167 0.164 0.017-0.005-0.01-0.101-0.057-0.214 -0.081-0.194-0.161-0.387-0.242-0.581 -0.047-0.113-0.067-0.215-0.044-0.227 0.023-0.013 0.101 0.057 0.174 0.155 0.126 0.17 0.252 0.339 0.379 0.508 0.073 0.098 0.147 0.171 0.165 0.162 0.019-0.01 0.007-0.111-0.024-0.229C90.787 81.756 90.684 81.378 90.572 80.966z"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
      </div>
    )
  }
}