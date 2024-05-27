from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        name = request.form.get("name")
        return render_template("calculator.html", name=name)
    else:
        return render_template("index.html")


@app.route("/homepage", methods=['GET', 'POST'])
def homepage():
    if request.method == "POST":
        return render_template("index.html")
    else:
        return render_template("calculator.html")
