from app.main import app

def print_routes():
    for route in app.routes:
        if hasattr(route, "path"):
            print(f"PATH: {route.path}")
        elif hasattr(route, "routes"):
            for r in route.routes:
                if hasattr(r, "path"):
                    print(f"MOUNTED PATH: {route.path}{r.path}")

if __name__ == "__main__":
    print_routes()
