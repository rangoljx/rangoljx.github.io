---
comments: true
tags:
    - python脚本
    - Mkdocs
    - nav
icon: simple/python
# icon: material/language-python
---

# 使用脚本快速生成mkdocs.yaml中nav的文件

!!! info  ""
    :material-read: __View__ <span id="busuanzi_value_page_pv"></span> __Times__

---

<center>[点击下载 :material-download:](./navtest.py){ .md-button target="_blank" }</center>
---

=== "py"

    ```py title="navtest.py" hl_lines="4 5"
    import os

    # 指定文件列表的路径和输出目录
    file_list_path = r'xxxx\nav.txt'  # 将mkdocs.yaml中nav另存为txt
    output_dir = 'Your_Project_path\\docs'  # 注意使用双反斜杠或原始字符串

    # 读取文件列表并获取路径列表
    def get_md_file_paths_from_list(file_list_path):
        md_file_paths = []
        try:
            with open(file_list_path, 'r', encoding='utf-8') as file:
                for line in file:
                    # 去除行尾的换行符和行首/尾的空白字符
                    line = line.strip()
                    # 检查行是否为空或是否只包含描述（即没有“: ”分隔符和路径）
                    if line and ': ' in line:
                        # 分割描述和路径/文件名
                        description, file_path = line.split(': ', 1)
                        # 去除路径/文件名两侧的空格（如果有的话）
                        file_path = file_path.strip()
                        # 检查路径/文件名是否为非空字符串
                        if file_path:
                            # 将路径/文件名添加到列表中（这里假设路径/文件名已经是正确的）
                            md_file_paths.append(file_path)
                    # 如果行不包含“: ”，则可以选择在这里添加其他处理逻辑（比如打印警告或忽略该行）
                    # else:
                    #     print(f"Warning: The line '{line}' does not contain a path.")
        except FileNotFoundError:
            print(f"Error: The file {file_list_path} was not found.")
        except Exception as e:
            print(f"An error occurred: {e}")
        return md_file_paths

    # 创建Markdown文件
    def create_markdown_files(md_file_paths, output_dir):
        for file_path in md_file_paths:
            # 确保文件名以 .md 结尾（如果不是，则可以在这里添加逻辑来处理，比如自动添加 .md 扩展名）
            if not file_path.endswith('.md'):
                # 这里选择打印警告并跳过该文件，但您可以根据需要修改这一行为
                print(f"Warning: The file path '{file_path}' does not have a .md extension. Skipping.")
                continue
            
            # 构建完整的文件路径
            full_file_path = os.path.join(output_dir, file_path)
            
            # 创建文件的目录（如果不存在）并写入默认内容
            os.makedirs(os.path.dirname(full_file_path), exist_ok=True)
            with open(full_file_path, 'w', encoding='utf-8') as file:
                file.write('---\ntags:\n---\n\n#')

    # 执行脚本
    md_file_paths = get_md_file_paths_from_list(file_list_path)
    create_markdown_files(md_file_paths, output_dir)
    ```














